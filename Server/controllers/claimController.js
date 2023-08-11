const Claim = require("../database/models/claim")

module.exports= {
    createClaim : (req , res) => {
        const content = req.body.content;
        const Client_id = req.params.Client_id;
        const Places_id = req.params.Places_id;
         Claim.create({content,Client_id,Places_id})
         .then((reslmt) => {
           res.status(201).send(reslmt);
         })
         .catch((err) => {
           res.status(500).send(err);
         });
         
      },
   
 
}