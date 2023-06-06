import ProductController from "../../Controllers/productController.js";

const productController = new ProductController()

app.get('/products', productController.getProducts);
app.post('/products', productController.createProduct);
