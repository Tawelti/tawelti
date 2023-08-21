const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configdb');

const {Client} = require('./client'); 



const Favorite = sequelize.define('Favorite', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      Client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
   
    
},{ timestamps: false });


Client.hasMany(Favorite, { foreignKey: {
  name: 'Client_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} });
Favorite.belongsTo(Client, { foreignKey: {
  name: 'Client_id', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE', 
} });





module.exports = { Favorite };
