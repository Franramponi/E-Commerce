import { Router } from 'express'
import productRoutes from "./productRoutes.js"
import tagRoutes from "./tagRoutes.js"
import userRoutes from "./userRoutes.js"

const router = Router();

router.use("/products", productRoutes);
router.use("/tags", tagRoutes);
router.use("/users", userRoutes);

export default router;