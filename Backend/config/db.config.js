import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

//retry method need to be implemented
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected....");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
}
export default connectDB;