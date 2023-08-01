const {Client}= require('../database/models/client')

module.exports= {
 createClient : (req , res) => {
Client.create({})
 }
}