import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

const mongo_URL = process.env.mongo_URL;
const Client = new MongoClient(mongo_URL);
await Client.connect();
console.log(`Connected to MongoDB`);

app.listen(PORT, () => {
  console.log(`Server: ${PORT}`);
});
