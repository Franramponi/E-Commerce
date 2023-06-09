import User from "./User.js";
import Product from "./Product.js";

// Asociación entre User y Product (1:N) (Vendedores)
User.hasMany(Product, { 
    foreignKey: 'userId' 
});
Product.belongsTo(User, { 
    foreignKey: 'userId' 
});


export { User, Product }