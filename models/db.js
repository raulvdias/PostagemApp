const Sequelize = require('sequelize');

//Config 
    //Banco de Dados
    const sequelize = new Sequelize('postapp', 'root', 'root123', {
        host: 'localhost',
        dialect: 'mysql'
      });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}