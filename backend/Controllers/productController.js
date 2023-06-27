import { Product, ProductTags, Tag, Type } from "../Models/models.js";
import { Op } from 'sequelize'

class ProductController {
  constructor(){}

  // Obtener todos los productos
  getProducts = async (req, res) => {
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
      if (req.query.vendor_id) {
        options.where.vendor_id = req.query.vendor_id;
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
    const { name, description, stock, image, price, type, vendor_id, tags } = req.body;
    console.log(req.body);
    
    try {
      const typeObj = await Type.findOne({
        where: {
					name: type
				},
				attributes: ["id"]
      });
      if (!typeObj.dataValues) throw new Error("Type could not be gotten");
      const type_id = typeObj.dataValues.id;

      const product = await Product.create({ name, description, stock, image, price, type_id, vendor_id });
      if (!product.dataValues) throw new Error("Product could not be created");
      const product_id = product.dataValues.id;

      for (const t of tags) {
        const tag = await Tag.findOne({
          where: {
            name: t
          },
          attributes: ["id"]
        });
        
        let tag_id = -1;

        if (tag && tag.dataValues) {
          tag_id = tag.dataValues.id;
        }
        else {
          const name = t;
          const newTag = await Tag.create({ name });
          tag_id = newTag.dataValues.id;
        }
        const link = await ProductTags.create({ product_id, tag_id })
      }

      res.status(200).send({ success: true, message: "Created product" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al crear el producto.' });
    }
  };
}


export default ProductController;