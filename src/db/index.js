import mongoose from "mongoose";
import { app } from "../app.js";
import { DataBaseName } from "../constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DataBaseName}`
    );
    console.log(
      `Database connected Data base host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database Connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
