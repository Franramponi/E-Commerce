import { Router } from "express";
const userRoutes = Router();

import UserController from "../Controllers/userController.js";

const userController = new UserController()

userRoutes.get('/:name', userController.getUsersByName);
userRoutes.put('/:name', userController.updateUserByName);
userRoutes.post('/', userController.createUser);
userRoutes.post('/login', userController.login);

export default userRoutes