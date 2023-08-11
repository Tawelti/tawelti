const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tawelti", "root", "root", {
  host: "localhost",
  dialect: "mysql",
 
});


module.exports = sequelize;
