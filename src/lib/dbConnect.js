import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function dbConnect(collectionName) {
  await client.connect(); // ensure connected
  return client.db(process.env.DB_NAME).collection(collectionName);
}
