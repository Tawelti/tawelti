const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tawelti", "dhia", "@Dhia12345@*", {
  host: "localhost",
  dialect: "mysql",
 
});


module.exports = sequelize;
