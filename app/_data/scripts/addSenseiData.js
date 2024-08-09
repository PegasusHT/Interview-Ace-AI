var MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB_NAME || 'test';

async function addSenseiData() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to the database");

        const db = client.db(dbName);
        const senseiData = [
            {
                name: "Michael",
                field: "IT",
                character: ["funny", "easy"],
                description: "A charming guy who wants to have a good time with the interviewee and get the best thing out of the interviewee's ability",
            },
            {
                name: "Braum",
                field: "IT",
                character: ["hardworking", "tough"],
                description: "The team lead of an IT development company, wants to challenge the interviewee to see their best",
            },
        ];

        const result = await db.collection("Sensei").insertMany(senseiData);
        console.log(`${result.insertedCount} documents inserted`);
    } catch (err) {
        console.error("Error adding Sensei data:", err);
    } finally {
        await client.close();
    }
}

addSenseiData();