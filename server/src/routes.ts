import express from "express";
import connectDB from "./shared/utils/database/mongo/index"

export const app = express();

app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, MongoDB and Express with TypeScript!');
});


export default app;