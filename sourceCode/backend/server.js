import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
// Import User model to register it
import './src/models/User.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// TODO: Add your routes here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
