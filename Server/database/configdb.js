const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tawelti", "ahmed", "Root123!",  {
  host: "localhost",
  dialect: "mysql",
 
});


module.exports = sequelize;
