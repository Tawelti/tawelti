const {Products}= require('../database/models/products')

module.exports= {
 createProducts : (req , res) => {
    Products.create({})
 }
}