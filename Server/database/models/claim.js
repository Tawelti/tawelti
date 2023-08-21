const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');


const { Client } = require('./client');
const {Places} = require("./places")


const Claim = sequelize.define('Claim', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, { timestamps: false })

Client.hasMany(Claim , { foreignKey: {
  name: 'Client_id', 
  allowNull: false, 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})
Claim.belongsTo(Client , { foreignKey: {
  name: 'Client_id', 
  allowNull: false, 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})

Places.hasMany(Claim , {foreignKey: {
  name: 'Places_id', 
  allowNull: false, 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})
Claim.belongsTo(Places , {foreignKey: {
  name: 'Places_id', 
  allowNull: false, 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})


module.exports = Claim;