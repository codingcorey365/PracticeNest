const mongoose = require('mongoose');
require('dotenv').config();

async function testConnection() {
  try {
    const uri = process.env.MongoDB_URI || 'mongodb://localhost:27017/practicenest';
    console.log('Attempting to connect to MongoDB...');
    console.log('URI:', uri);
    
    await mongoose.connect(uri);
    console.log('✅ Successfully connected to MongoDB!');
    
    // Test creating a collection
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
}

testConnection(); 