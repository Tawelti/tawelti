const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');


const { Client } = require('./client');
const {Places} = require("./places")


const Claim = sequelize.define('Claim', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, { timestamps: false })

Client.hasMany(Claim , {foreignKey : "Client_id"})
Claim.belongsTo(Client , {foreignKey : "Client_id"})

Places.hasMany(Claim , {foreignKey : "Places_id"})
Claim.belongsTo(Places , {foreignKey : "Places_id"})



module.exports = Claim;