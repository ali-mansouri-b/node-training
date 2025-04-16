const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/express-mongo-tutorial');
    console.log('✅ connected to MongoDB successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error', err.message);
    process.exit(1); // exit if error
  }
};

module.exports = connectDB;