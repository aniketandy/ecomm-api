const Sequelize = require('sequelize');

const dbInit = function(){}
dbInit.prototype.getConnection = function(){
    const _sequelize = new Sequelize({
        host: 'db4free.net',
        port: 3306,
        database: 'sm_exceed',
        dialect: 'mysql',
        username: 'sm_exceed',
        password: 'sm_exceed',
        storage: ':memory:',
    });
   return _sequelize;
}
const db_init= new dbInit();
const sequalize = db_init.getConnection();
module.exports = {
    'sequalize' : sequalize,
    'Sequelize' : Sequelize.sequalize
};
