const {Admin}= require('../database/models/admin')

module.exports= {
 createAdmin : (req , res) => {
    Admin.create({})
 }
}