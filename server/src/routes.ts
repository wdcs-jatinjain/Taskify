import express from "express";
import connectDB from "./shared/utils/database/mongo/index"
import createUser from "./controllers/user";

export const app = express();

app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, MongoDB and Express with TypeScript!');
});

app.post('/user', createUser)


export default app;