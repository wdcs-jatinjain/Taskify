import express from 'express';
import createUserController from "./createuser";
const UserController = express.Router()

UserController.post('/create', createUserController)

export default UserController;