import e from "express";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "ChatBot",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
