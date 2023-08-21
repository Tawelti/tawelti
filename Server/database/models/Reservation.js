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

Client.hasMany(Reservation , { foreignKey: {
  name: 'Client_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} })
Reservation.belongsTo(Client , { foreignKey: {
  name: 'Client_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} })

Reservation.hasOne(Order , {foreignKey: {
  name: 'Reservation_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} } )
Order.belongsTo(Reservation , {foreignKey: {
  name: 'Reservation_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} })


Places.hasMany(Reservation , {foreignKey: {
  name: 'Places_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})
Reservation.belongsTo(Places , {foreignKey: {
  name: 'Places_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}})

module.exports = {Reservation};