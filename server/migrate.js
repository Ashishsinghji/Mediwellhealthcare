const { connectDB, ensureIndexes } = require('./db');
async function runMigrations() {
  await connectDB();
  await ensureIndexes();
  console.log('[migrate] MongoDB collections/indexes ready.');
}
module.exports = { runMigrations };
