const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const { Favorite } = require('./Favorite');
const { Client } = require('./client');






const Places = sequelize.define('Places', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  images: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descreption: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  mapLocation: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  Latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Longitude : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  patentimage: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  approved: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  category : {
    type : DataTypes.ENUM("coffe" , "Restaurent" , "Lounge"),
    allowNull: false,
  },
  type : {
    type : DataTypes.ENUM("normal" , "VIP"),
    allowNull: false,
  }
},{ timestamps: false });
  


Places.hasMany(  Favorite ,  { foreignKey : "Places_id"})
Favorite.belongsTo( Places, {foreignKey : "Places_id"})


Client.belongsToMany(Places, { through: 'ClientPlaces', foreignKey: 'Client_id' });
Places.belongsToMany(Client, { through: 'ClientPlaces', foreignKey: 'Place_id' });




module.exports = { Places };