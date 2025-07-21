const { MongoClient } = require('mongodb');

const MONGO_URL = process.env.MONGO_URL;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    
    const db = client.db(); // Use default database
    const holdings = await db.collection('holdings').find({}).toArray();
    
    await client.close();
    
    res.status(200).json(holdings);
  } catch (error) {
    console.error('Error fetching holdings:', error);
    res.status(500).json({ error: 'Failed to fetch holdings' });
  }
}
