import { Router } from "express";
const userRoutes = Router();

import UserController from "../Controllers/userController.js";

const userController = new UserController()

userRoutes.get('/', userController.getUsers);

userRoutes.get('/:username/:password', userController.getUserByUsernameAndPassword);

export default userRoutes