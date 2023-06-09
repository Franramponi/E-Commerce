import { DataTypes } from "sequelize";
import sequelize from '../dbConnection/connection.js'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false
});

export default User
