const {Order}= require('../database/models/order')

module.exports= {
 createOrder : (req , res) => {
    Order.create({})
 }
}