import Product from "../backend/Models/Product.js";

class ProductController {
    constructor(){}
    // Obtener todos los productos
    getProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los productos.' });
    }
  };
  
  // Crear un nuevo producto
    createProduct = async (req, res) => {
    const { name, description, stock } = req.body;
    
    try {
      const product = await Product.create({ name, description, stock });
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el producto.' });
    }
  };
}


export default ProductController;