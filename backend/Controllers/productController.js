import { Product } from "../Models/models.js";
import { Op } from 'sequelize'

class ProductController {
  constructor(){}

  // Obtener todos los productos
  getProducts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    try {
      const options = {
        where: {
					price: {
            [Op.between]: [req.query.min_precio, req.query.max_precio]
          }
				},
				attributes: ["id", "name", "description", "stock", "image", "price", "vendor_id"]
      }
      if (req.query.marca) {
        options.where.marca = req.query.marca;
      }
      if (req.query.tipo != 'Todos') {
        options.where.tipo = req.query.tipo;
      }
      
      const products = await Product.findAll(options);
      res.status(200).send({ success: true, message: "Got products", products });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener los productos.' });
    }
  };

  // Obtener producto especifico
  getProductByID = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    try {
			const { id } = req.params;
      const product = await Product.findOne({
        where: {
					id: id
				},
				attributes: ["id", "name", "description", "stock", "image", "price", "vendor_id"]
      });
      if (!product.dataValues) throw new Error("Product could not be gotten");
      res.status(200).send({ success: true, message: "Got product by id", product });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener los productos.' });
    }
  };
  
  // Crear un nuevo producto
  createProduct = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { name, description, stock } = req.body;
    
    try {
      const product = await Product.create({ name, description, stock });
      res.status(200).send({ success: true, message: "Created product", product });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al crear el producto.' });
    }
  };
}


export default ProductController;