

import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

export const connectDB = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log(`Using database: ${conn.connection.name}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)//1 code means exit with failure,0 means success
  }
}