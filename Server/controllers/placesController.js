const {Places}= require('../database/models/places')

module.exports= {
    createPlaces : (req , res) => {
     Places.create({})
 }
}