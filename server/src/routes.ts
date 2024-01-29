import express from "express";
import connectDB from "./shared/utils/database/mongo/index"
import router from "./controllers"


export const app = express();

app.use(express.json())
connectDB();

app.get('/', (req, res) => {
    res.send('Hello, MongoDB and Express with TypeScript!');
});

// app.post('/user', createUserController)

app.use("/api", router)


export default app;