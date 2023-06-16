import { DataTypes } from "sequelize";
import sequelize from '../dbConnection/connection.js'
import { Product, Tag } from './models.js'

const ProductTags = sequelize.define('ProductTags', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Product,
      key: 'id'
    }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Tag,
      key: 'id'
    }
  },
},
{
  timestamps: false
});

export default ProductTags
