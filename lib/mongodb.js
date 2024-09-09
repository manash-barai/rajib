const mongoose = require('mongoose');

let isConnected = false; // track the connection

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('MONGO_URI environment variable is not defined');
    return;
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName: "mustbay",
    });

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = { connectToDB };
