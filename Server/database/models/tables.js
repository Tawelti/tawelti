const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const { Places } = require('./places');



const Tables = sequelize.define('Tables', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numberofchairs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reserved: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
},{ timestamps: false });

Places.hasMany(Tables)
Tables.belongsTo(Places)



  module.exports = {Tables};