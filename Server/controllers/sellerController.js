const {Seller}= require('../database/models/seller')

module.exports= {
    createseller : (req , res) => {
        Seller.create({})
 },

 getOneByid : (req,res) => {
    Seller.findAll({where : {id : req.params.id } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
},
updateSeller:(req,res)=>{
    const Updated = {
        name: req.body.name,
        email: req.body.email,
      }
    Seller.update(Updated , {where:{id:req.params.id}})
    .then(result =>
     res.status(201).json(result)
     )
    .catch(error=> 
    res.status(500).json(error)
    )
},

}