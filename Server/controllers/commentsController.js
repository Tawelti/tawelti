const {Comments}= require('../database/models/Commentes')

module.exports= {
 createComments : (req , res) => {
    Comments.create({})
 }
}