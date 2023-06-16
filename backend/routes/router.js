import { Router } from 'express'
import productRoutes from "./productRoutes.js"
import tagRoutes from "./tagRoutes.js"

const router = Router();

router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

export default router;