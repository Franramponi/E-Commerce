import { Router } from "express";
const userRoutes = Router();

import UserController from "../Controllers/userController.js";

const userController = new UserController()

userRoutes.get('/', userController.getUsers);

userRoutes.get('/:username/:password', userController.getUserByUsernameAndPassword); //la ejecución se hace en este lugar

userRoutes.get('/:username', userController.getUserByName); //la ejecución se hace en este lugar

userRoutes.post('/', userController.createUser);

export default userRoutes