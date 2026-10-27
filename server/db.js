require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME || 'mediwell';
if (!uri) throw new Error('MONGO_URI is required in server/.env');

const client = new MongoClient(uri);
let db;
let ready;

async function connectDB() {
  if (db) return db;
  if (!ready) ready = client.connect().then(() => {
    db = client.db(dbName);
    console.log(`MongoDB connection OK (${dbName})`);
    return db;
  }).catch(err => {
    ready = null;
    console.error('MongoDB connection FAILED:', err.message);
    throw err;
  });
  return ready;
}

async function collection(name) { return (await connectDB()).collection(name); }

async function nextId(name) {
  const c = await collection('_counters');
  const r = await c.findOneAndUpdate(
    { _id: name },
    { $inc: { seq: 1 } },
    { upsert: true, returnDocument: 'after' }
  );
  return r.seq;
}

async function insert(name, doc, idField) {
  const c = await collection(name);
  const copy = { ...doc };
  if (idField && copy[idField] == null) copy[idField] = await nextId(name);
  if (!copy.created_at) copy.created_at = new Date();
  const result = await c.insertOne(copy);
  return { ...copy, _id: result.insertedId };
}

async function findOne(name, filter = {}) { return (await collection(name)).findOne(filter); }
async function find(name, filter = {}, options = {}) {
  let q = (await collection(name)).find(filter);
  if (options.sort) q = q.sort(options.sort);
  if (options.limit) q = q.limit(options.limit);
  return q.toArray();
}
async function updateOne(name, filter, update) { return (await collection(name)).updateOne(filter, update); }
async function removeOne(name, filter) { return (await collection(name)).deleteOne(filter); }
async function count(name, filter = {}) { return (await collection(name)).countDocuments(filter); }
async function ensureIndexes() {
  const users = await collection('users');
  await users.createIndex({ email: 1 }, { unique: true });
  const appts = await collection('appointments');
  await appts.createIndex({ doctor_id: 1, appointment_date: 1, slot_time: 1 });
  const services = await collection('service_bookings');
  await services.createIndex({ service_name: 1, booking_date: 1, slot_time: 1 });
  const bills = await collection('billing');
  await bills.createIndex({ transaction_ref: 1 }, { unique: true, sparse: true });
}

module.exports = { connectDB, collection, insert, findOne, find, updateOne, removeOne, count, ensureIndexes, nextId };
