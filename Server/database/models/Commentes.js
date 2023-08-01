const {  DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const {Client} = require("./client")
const {Places} = require("./places")

const Commentes = sequelize.define('Commentes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: 'null',
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    Client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Places_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Places_Seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{timestamps: false,});

  Client.hasMany(Commentes, { foreignKey: 'Client_id' });
  Commentes.belongsTo(Client, { foreignKey: 'Client_id' });
  
  Places.hasMany(Commentes, { foreignKey: 'Places_id' });
  Commentes.belongsTo(Places, { foreignKey: 'Places_id' });


module.exports = { Commentes };