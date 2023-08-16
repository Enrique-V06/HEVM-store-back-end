// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'})
// Categories have many Products
Category.belongsToMany(Product, {through: {
  foreignKey: 'category_id'}})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    unique: false,
  },
  as: 'p_tags'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through:{
    model: ProductTag,
    unique: false,
  },
  as: 'tags_p'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
