const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://kumarashishsingh2004_db_user:kuG89J6MyF6nk4kc@cluster0.o2jtrv4.mongodb.net';

const client = new MongoClient(url);

async function Connection(){
    try {
        await client.connect(); //database connection
        console.log("DB Connected");
    } catch (error) {
        console.log("Connection failed", error);
    }
}


Connection();
