import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "", {
            dbName: 'taskify'
        });
        console.log('database connected.')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
