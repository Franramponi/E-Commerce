import User from "./User.js";
import Product from "./Product.js";

// Asociación entre User y Product (1:N) (Vendedores)
User.hasMany(Product, { 
    foreignKey: 'vendor_id' 
});
Product.belongsTo(User, { 
    foreignKey: 'vendor_id' 
});


export { User, Product }