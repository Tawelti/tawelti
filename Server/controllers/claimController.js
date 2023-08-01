const Claim = require("../database/models/claim")

module.exports= {
    createClaim : (req , res) => {
    Claim.create({})
 }
}