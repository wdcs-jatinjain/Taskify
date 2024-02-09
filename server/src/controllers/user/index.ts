import express from 'express';
import createUserController from "./createUser";

const UserController = express.Router()

UserController.post('/create', createUserController)

export default UserController;