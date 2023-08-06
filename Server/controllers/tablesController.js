const {Tables}= require('../database/models/tables')

module.exports= {
    createTables : (req , res) => {
        Tables.create({})
 }
}