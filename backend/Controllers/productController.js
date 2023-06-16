import { Product, Tag, Type } from "../Models/models.js";
import { Op } from 'sequelize'

class ProductController {
  constructor(){}

  // Obtener todos los productos
  getProducts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    try {
      const options = {
        where: {},
				attributes: ["id", "name", "description", "stock", "image", "price", "vendor_id"]
      }

      if (req.query.min_precio || req.query.max_precio) {
        options.where.price = {};
        if (req.query.min_precio) {
          options.where.price[Op.gte] = req.query.min_precio;
        }
        if (req.query.max_precio) {
          options.where.price[Op.lte] = req.query.max_precio;
        }
      }

      if (req.query.marca) {
        options.where.marca = req.query.marca;
      }
      if (req.query.tipo && req.query.tipo != 'Todo') {
        options.include = [{
          model: Type,
          where: {
            name: req.query.tipo
          },
          attributes: []
        }];
      }
      if (req.query.tag && req.query.tag != 'Todo') {
        options.include = [{
          model: Tag,
          where: {
            name: req.query.tag
          },
          attributes: []
        }];
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