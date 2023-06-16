import { Router } from "express";
const tagRoutes = Router();

import TagController from "../Controllers/tagController.js";

const tagController = new TagController()

tagRoutes.get('/', tagController.getTags);

export default tagRoutes