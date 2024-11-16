const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database name 
const dbName = 'testConnectionDatabaseName';

let db;

const connectToDatabase = async () => {
    if (db){
        console.log('Already connected to MongoDB.');
        return db;
    }

    try {

        // Create a new MongoClient
        const client = new MongoClient(url);

        // Connect to the server 
        await client.connect();
        console.log('Connected successfully to MongoDB');

        // Assign the DB instance 
        db = client.db(dbName);
        return db;

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }

};

module.exports = connectToDatabase;