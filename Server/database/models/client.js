const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');



const defaultImageURL = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png';
const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(500),
    allowNull: true,
    defaultValue: defaultImageURL,
  },
},{ timestamps: false })




module.exports = {Client };