const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');


const { Places } = require('./places');

const defaultImageURL = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png';

const Seller = sequelize.define('Seller', {
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
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(500),
    allowNull: true,
    defaultValue: defaultImageURL,
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
  payed: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
},{ timestamps: false });


Seller.hasMany(Places , { foreignKey: 'Seller_id' })
Places.belongsTo(Seller , { foreignKey: 'Seller_id' })

module.exports = { Seller };