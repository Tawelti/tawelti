const {Seller}= require('../database/models/seller')

module.exports= {
    createseller : (req , res) => {
        Seller.create({})
 }
}