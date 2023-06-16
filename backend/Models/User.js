import { DataTypes } from "sequelize";
import sequelize from '../dbConnection/connection.js'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  credit_card: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [10, 10]
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  document: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [8, 8]
    }
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [10, 10]
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permission_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vendor_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  }
},
{
  timestamps: false
});

export default User
