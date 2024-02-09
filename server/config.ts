import { configDotenv } from "dotenv";
configDotenv()
export const MONGO_URI = process.env.MONGO_URL
export const JWT_SECRET_KEY = process.env.JWT_SECRET


