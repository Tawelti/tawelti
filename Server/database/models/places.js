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
  


Places.hasMany(  Favorite ,  { foreignKey: {
  name: 'Places_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})
Favorite.belongsTo( Places, {foreignKey: {
  name: 'Places_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})



Client.belongsToMany(Places, { through: 'ClientPlaces', foreignKey: {
  name: 'Client_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} });
Places.belongsToMany(Client, { through: 'ClientPlaces', foreignKey: {
  name: 'Places_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}});




module.exports = { Places };