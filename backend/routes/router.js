import { Router } from 'express'
import productRoutes from "./productRoutes.js"

const router = Router();

routes.use("/products", productRoutes)

export default router;