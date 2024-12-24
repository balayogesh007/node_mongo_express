import "dotenv/config";
import mongoose from "mongoose";

export const DatabaseConnection = async () => {
  const uri = process.env.MONGO_DB_URI as string;

  try {
    await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000
      });
  } catch (error) {
    console.error(error);
  }
};
