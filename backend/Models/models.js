import User from "./User.js";
import Product from "./Product.js";
import Tag from "./Tag.js";
import ProductTags from "./ProductTags.js";

// Asociación entre User y Product (1:N) (Vendedores)
User.hasMany(Product, {
    foreignKey: 'vendor_id' 
});
Product.belongsTo(User, { 
    foreignKey: 'vendor_id' 
});
Product.belongsToMany(Tag, { 
    through: ProductTags,
    foreignKey: 'product_id'
});
Tag.belongsToMany(Product, { 
    through: ProductTags,
    foreignKey: 'tag_id'
});


export { User, Product, Tag, ProductTags }