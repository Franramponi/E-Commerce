import { User } from "../Models/models.js";
import { Op } from 'sequelize'

class UserController {
  constructor(){}

  // Obtener usuario en base al nombre de usuario
  getUsersByName = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    try {
			const { name } = req.params;
      const user = await User.findOne({
        where: {
					name: name
				},
				attributes: ["name", "email", "permission_level", "vendor_id"]
      });
      if (!user.dataValues) throw new Error("User could not be gotten");
      res.status(200).send({ success: true, message: "Got user by name", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener el usuario.' });
    }
  };

  // Crear un usuario producto
  createUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    try {
      const { name, password, email, credit_card, address, document, phone_number, vendor } = req.body;

      const user = await User.create({ name, password, email, credit_card, address, document, phone_number, permission_level: 1 });
      if (!user.dataValues) throw new Error("User could not be created");
      if (vendor == 'true')
      {
        user.set({
          vendor_id: user.dataValues.id,
          permission_level: 2
        });
        user.save();
      }

      res.status(200).send({ success: true, message: "Created user" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al crear el usuario.' });
    }
  };

  // TODO: Actualizar usuario
  updateUserByName = async (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");
    
    try {
			const { name } = req.params;
      const user = await User.findOne({
        where: {
					name: name
				},
				attributes: ["name", "email", "permission_level", "vendor_id"]
      });
      if (!user.dataValues) throw new Error("User could not be gotten");
      res.status(200).send({ success: true, message: "Got user by name", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener el usuario.' });
    }
	}
	
  // TODO: Borrar usuario
	deleteUserByID = async (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");
    
    try {
			const { name } = req.params;
      const user = await User.findOne({
        where: {
					name: name
				},
				attributes: ["name", "email", "permission_level", "vendor_id"]
      });
      if (!user.dataValues) throw new Error("User could not be gotten");
      res.status(200).send({ success: true, message: "Got user by name", user });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener el usuario.' });
    }
	}

  // Login
  login = async (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");

		try {
			const { name, password } = req.body;
			const user = await User.findOne({
				where: {
          name: name
        }
			});

			if (!user) throw new Error("User could not be found");

			const compare = await user.validatePassword(password);
			if (!compare) throw new Error("Password was incorrect");

			res.status(200).send({ success: true, message: "Logged in" });

		} catch(err) {
			console.error(err);
			res.status(400).send({ success: false, result: err.message });
		}
	}
}


export default UserController;