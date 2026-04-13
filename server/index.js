import 'dotenv/config';
import path from 'path';
import mongoose from 'mongoose';
import app from './app.js';

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is missing from .env!');
    process.exit(1);
}

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is flying on http://localhost:${PORT}`);
        console.log(`Stocks Search & Dashboard are now READY!`);
    });
};

const mongoOptions = {
    serverSelectionTimeoutMS: 30000,
    connectTimeoutMS: 30000,
};

console.log('Connecting to MongoDB Atlas...');
mongoose.connect(MONGODB_URI, mongoOptions)
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
    startServer();
  })
  .catch(err => {
    console.error('MongoDB Connection Failed:', err.message);
    startServer();
  });

