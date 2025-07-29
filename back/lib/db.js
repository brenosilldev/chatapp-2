import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async () => {
    try {
       const coon = await mongoose.connect(process.env.MONGO_URL,);
        console.log(`MongoDb Connected ${coon.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};