const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');


const {Client} = require("./client");
const { Order } = require('./order');
const { Places } = require('./places');


const Reservation = sequelize.define('Reservation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    numberofperson: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },{ timestamps: false });

Client.hasMany(Reservation , { foreignKey: 'Client_id' })
Reservation.belongsTo(Client , { foreignKey: 'Client_id' })

Reservation.hasOne(Order , { foreignKey: 'Reservation_id' } )
Order.belongsTo(Reservation , { foreignKey: 'Reservation_id' })


Places.hasMany(Reservation , {foreignKey : "Places_id"})
Reservation.belongsTo(Places , {foreignKey : "Places_id"})

module.exports = {Reservation};