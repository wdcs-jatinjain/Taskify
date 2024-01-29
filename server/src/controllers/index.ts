import express, { Router } from "express";
import createUserController from "./user";

const router = express.Router();

router.post('/user', createUserController)

export default router;