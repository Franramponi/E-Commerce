import { User } from "../Models/models.js";

class UserController {
  constructor(){}


  getAllUsers = async(req, res, next) => {
    try {
      const result = User
      res.send("get all users")
    } catch (error) {
      
    }

  }


  getAllUserById = async(req, res, next) => {
    try {
      const result = User
    } catch (error) {
      
    }

  }

  getUserByName = async(req, res, next) => {
    try {
      const result = User
    } catch (error) {
      
    }

  }


  createUser = async(req, res, next) => {
    try {
      const result = User
    } catch (error) {
      
    }

  }


  updateUserById = async(req, res, next) => {
    try {
      const result = User
    } catch (error) {
      
    }

  }










  // Obtener todos los usuarios
  getUsers = async (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
    try {
      const users = await User.findAll();
      res.status(200).send({ success: true, message: "Got users", users });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error al obtener los usuarios' });
    }
  };

// Obtener usuario por nombre de usuario y contraseña
getUserByUsernameAndPassword = async (req, res) => { //a este metodo lo vamos a manejar como si fuese un middleware
  res.header("Access-Control-Allow-Origin", "*");

  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        name: username,
        password: password
      },
      attributes: ["id", "name", "email", "credit_card", "address", "document", "phone_number", "password", "permission_level", "vendor_id"]
    });
    if (!user || !user.dataValues) throw new Error("User could not be found");
    res.status(200).send({ success: true, message: "Got user by username and password", user });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al obtener el usuario.' });
  }
};

}

export default UserController;