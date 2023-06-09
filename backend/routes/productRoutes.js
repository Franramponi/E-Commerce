import { Router } from "express";
const productRoutes = Router();

import ProductController from "../Controllers/productController.js";

const productController = new ProductController()

productRoutes.get('/', productController.getProducts);
productRoutes.get('/:id', productController.getProductByID);
productRoutes.post('/', productController.createProduct);

export default productRoutes