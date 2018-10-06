const dbInit = require('../utilities/dbInit.js');
const sequelize = dbInit.sequalize;
const Sequelize = sequelize.Sequelize;
const userModel = {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    firstName : {
        type : Sequelize.STRING,
        allowNull : false,
        validate:{
            len : [2,30]
        }
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    }
}
const User = sequelize.define('euser', userModel);
sequelize.sync({force:false});
module.exports = User;
