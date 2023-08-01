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


Order.hasOne(Tables , { foreignKey: 'Order_id'  })
Tables.belongsTo(Order , { foreignKey: 'Order_id'  })

Client.hasMany(Order)
Order.belongsTo(Client)

Products.hasMany(Order , { foreignKey: 'Products_id'  })
Order.belongsTo(Products , { foreignKey: 'Products_id'  })




module.exports = { Order  };