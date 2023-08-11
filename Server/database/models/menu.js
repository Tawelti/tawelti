const { DataTypes } = require('sequelize');
const sequelize = require('../configdb'); 
const { Places } = require('./places');

const Menu = sequelize.define('Menu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  productname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image : {
  type: DataTypes.STRING,
  allowNull: false,
  }

}, { timestamps: false });

Places.hasMany(Menu , {foreignKey: 'Places_id'})

module.exports = Menu;
