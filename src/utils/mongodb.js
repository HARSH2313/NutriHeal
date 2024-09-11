// /src/lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to keep the MongoDB client from being repeatedly created
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoDB client for each request
  clientPromise = client.connect();
}

export default clientPromise;
