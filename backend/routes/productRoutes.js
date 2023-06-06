import { Router } from "express";
const productRoutes = Router();

import ProductController from "../../Controllers/productController.js";

const productController = new ProductController()

productRoutes.get('/products', productController.getProducts);
productRoutes.post('/products', productController.createProduct);

export default productRoutes