const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017/";

const dbName = "related-questions";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
};

const getDb = async () => {
  const db = client.db(dbName);
  return db;
};

const getCollection = async (collectionName) => {
  const db = await getDb();
  const collection = db.collection(collectionName);
  return collection;
};

module.exports = {
  connect,
  getDb,
  getCollection,
};
