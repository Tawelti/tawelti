const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');
const {Places} = require("./places")

const Products = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productname: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(500),
    allowNull: true,
  }
  },{ timestamps: false })


Places.hasMany(Products)
Products.belongsTo(Places)




module.exports = { Products  };