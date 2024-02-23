import express from 'express';
import createUserController from "./createUser";
import loginUserController from './loginUser';

const UserController = express.Router()

UserController.post('/create', createUserController)
UserController.post('/login', loginUserController)

export default UserController;