import mongoose from "mongoose";
import { env } from "./env";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Erro connecting to database: ", error);
  }
};