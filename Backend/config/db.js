import { MongoClient, ServerApiVersion } from "mongodb";

const uri ="mongodb+srv://pasanpiyumantha98:G30JMklKNHdfum19@cluster0.etw2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


export const connectDB = async () => {
  try {
    
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

await client.connect();

const dbname="Movielabs"

const db = client.db(dbname)

return db;

  } catch (err) {
    console.error(err.message);
    process.exit(1);         // crash fast if DB is unreachable
  }
};

