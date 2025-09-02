import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "fallback_connection_string"; 

if (!uri) {
  console.error("no uri");
}

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
