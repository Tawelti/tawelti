const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const {Client} = require("./client")
const {Tables} = require('./tables');
const { Products } = require('./products');


const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  totalamount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentstatus: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: 'false',
  },

  },{ timestamps: false });


Order.hasOne(Tables , { foreignKey: {
  name: 'Order_id', 
  allowNull: false, 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}  })
Tables.belongsTo(Order , { foreignKey: {
  name: 'Order_id', 
  allowNull: false, 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}  })

Client.hasMany(Order)
Order.belongsTo(Client)

Products.hasMany(Order , { foreignKey: {
  name: 'Products_id',  
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}  })
Order.belongsTo(Products , { foreignKey: {
  name: 'Products_id',  
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
}  })




module.exports = { Order  };