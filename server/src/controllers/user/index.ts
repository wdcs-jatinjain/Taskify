import express from 'express';
import createUserController from "./createUser";
import loginUserController from './loginUser';
import findUserController from './finduser';
import getUserDataController from './getuserdata';

const UserController = express.Router()

UserController.post('/create', createUserController)
UserController.post('/login', loginUserController)
UserController.get('/find', findUserController)
UserController.get('/getuser', getUserDataController)

export default UserController;