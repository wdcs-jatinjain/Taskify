import express from 'express';
import createUserController from "./createUser";
import loginUserController from './loginUser';

const UserController = express.Router()

UserController.post('/create', createUserController)
UserController.get('/login', loginUserController)

export default UserController;