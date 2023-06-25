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
      res.status(500).send({ success: false, message: 'Error al obtener el usuario.' });
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
      res.status(500).send({ success: false, message: 'Error al crear el usuario.' });
    }
  };

  //Modificar un usuario según su nombre de usuario
  updateUserByName = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  
    try {
      const { name, email, credit_card, address, phone_number } = req.body;
      
        const [userRowUpdated] = await User.update( 
          {
            email: email,
            credit_card: credit_card,
            address: address,
            document: address,
            phone_number: phone_number
          },
          {
            where: {
              name: name
            }
          });
    
        if (userRowUpdated === 0) {
          res.status(500).send({ success: false, message: "User not found, could not update" });
          return;
        }

        const user = await User.findOne({
          where: {
            name: name
          },
          attributes: ["name", "email", "credit_card", "address", "document", "phone_number"]
        });
    
        res.status(200).send({ success: true, message: "User updated", user });
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Error trying to update the user.' });
      }
  };
	
  // Borrar un usuario según su nombre de usuario
	deleteUserByName = async (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");
    try {
			const { name } = req.params;
      const userRowDeleted = await User.destroy({
        where: {
          name: name
        }
      });

      if (userRowDeleted === 0) {
        res.status(500).send({ success: false, message: "User not found, could not delete" });
        return;
      }

      res.status(200).send({ success: true, message: "User deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: 'Error trying to delete the user.' });
    }
	}

  // Login
  login = async (req, res) => {
		res.header("Access-Control-Allow-Origin", "*");

		try {
			const { name, password } = req.body;
			let user = await User.findOne({
				where: {
          name: name
        }
			});

			if (!user) throw new Error("User could not be found");
      
			const compare = await user.validatePassword(password);
			if (!compare) throw new Error("Password was incorrect");

      user = await User.findOne({
				where: {
          name: name
        },
				attributes: ["name", "email", "credit_card", "address", "document", "phone_number", "permission_level", "vendor_id"]
			});
			res.status(200).send({ success: true, message: "Logged in", user });

		} catch(err) {
			console.error(err);
			res.status(500).send({ success: false, result: err.message });
		}
	}
}


export default UserController;