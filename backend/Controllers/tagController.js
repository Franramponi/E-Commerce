import { Tag } from "../Models/models.js";
import { Op } from 'sequelize'

class TagController {
  constructor(){}

  // Obtener todos los tags
  getTags = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    try {
      
      const tags = await Tag.findAll({ attributes: [ "name" ] });
      res.status(200).send({ success: true, message: "Got tags", tags });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener los tags.' });
    }
  };
}


export default TagController;