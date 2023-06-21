import { Router } from "express";
const userRoutes = Router();

import UserController from "../Controllers/userController.js";

const userController = new UserController()

userRoutes.get('/:name', userController.getUsersByName);
userRoutes.post('/', userController.createUser);
userRoutes.get('/login', userController.login);

export default userRoutes