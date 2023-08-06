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


Client.hasMany(Favorite, { foreignKey: 'Client_id' });
Favorite.belongsTo(Client, { foreignKey: 'Client_id' });





module.exports = { Favorite };
