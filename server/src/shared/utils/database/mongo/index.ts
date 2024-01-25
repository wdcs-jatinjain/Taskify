import mongoose from "mongoose";
import { MONGO_URI } from "../../../../../config"


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI || "", {
            dbName: 'taskify'
        });
        console.log('database connected.')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
