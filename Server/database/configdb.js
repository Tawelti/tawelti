const { Sequelize } = require("sequelize" );

const sequelize = new Sequelize("tawelti", "fares", "f@res1999", {
  host: "localhost",
  dialect: "mysql",
 
});


module.exports = sequelize;
