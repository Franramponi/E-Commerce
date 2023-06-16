import User from "./User.js";
import Product from "./Product.js";
import Tag from "./Tag.js";
import ProductTags from "./ProductTags.js";
import Type from "./Type.js";

// Asociación entre User y Product (1:N) (Vendedores)
User.hasMany(Product, {
    foreignKey: 'vendor_id' 
});
Product.belongsTo(User, { 
    foreignKey: 'vendor_id' 
});

// Asociación entre Product y Tag (N:N)
Product.belongsToMany(Tag, { 
    through: ProductTags,
    foreignKey: 'product_id'
});
Tag.belongsToMany(Product, { 
    through: ProductTags,
    foreignKey: 'tag_id'
});

// Asociación entre Type y Product (1:N) (Vendedores)
Type.hasMany(Product, {
    foreignKey: 'type_id'
});
Product.belongsTo(Type, {
    foreignKey: 'type_id'
});


export { User, Product, Tag, ProductTags, Type }