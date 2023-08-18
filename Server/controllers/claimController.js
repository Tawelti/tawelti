const Claim = require("../database/models/claim");
const { Client } = require("../database/models/client");
const { Places } = require("../database/models/places");

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
      getAllClaim:(req,res)=>{
        Claim.findAll({
          include:[
            {
              model:Places,
              attributes:['id','name','images']
            },
            {
              model:Client,
              attributes:['id','name','image']
            }
          ]
        })
        .then((result)=>{
          res.status(200).send(result)
        }).catch((err)=>{
          return res.status(400).send(err)
        })
      }
   
 
}