const dbInit = require('../utilities/dbInit.js');
const sequelize = dbInit.sequalize;
const Sequelize = sequelize.Sequelize;
const productModel = {
    productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    productName : {
        type : Sequelize.STRING
    },
    productDescription : {
        type : Sequelize.STRING
    },
    imageUrl : {
        type : Sequelize.STRING
    }
}
const Product = sequelize.define('product', productModel);
sequelize.sync({force:false});
module.exports = Product;
