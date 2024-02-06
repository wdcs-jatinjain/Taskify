import express, { Router } from "express";
import UserController from "./user";

const router = express.Router();

router.use('/user', UserController)

export default router;