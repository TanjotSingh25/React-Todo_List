import { MongoClient } from "mongodb";
import dotenv from "dotenv";

let db;
dotenv.config();

async function connectToDB(cb) {
  console.log(process.env.MONGODB_LINK);
  const client = new MongoClient(process.env.MONGODB_LINK);
  await client.connect();

  db = client.db("react-todolist-db");
  cb();
}

export { db, connectToDB };
