const async = require('hbs/lib/async');
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'admin'
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('system');
}

module.exports = dbConnect;