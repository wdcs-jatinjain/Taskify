import express from "express";
import connectDB from "./shared/utils/database/mongo/index"
import createUserController from "./controllers/user";

export const app = express();

app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, MongoDB and Express with TypeScript!');
});

app.post('/user', createUserController) 




export default app;