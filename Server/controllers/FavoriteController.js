const {Favorite}= require('../database/models/Favorite')

module.exports= {
 createFavorite : (req , res) => {
    Favorite.create({})
 }
}