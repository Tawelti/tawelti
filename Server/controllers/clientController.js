const {Client}= require('../database/models/client')

module.exports= {
 createClient : (req , res) => {
Client.create({})
 },
 getOneByid : (req,res) => {
    Client.findAll({where : {id : req.params.id } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
},
updateClient:(req,res)=>{
    const Updated = {
        name: req.body.name,
        email: req.body.email,
      }
    Client.update(Updated , {where:{id:req.params.id}})
    .then(result =>
     res.status(201).json(result)
     )
    .catch(error=> 
    res.status(500).json(error)
    )
},
updateClientImage:(req,res)=>{
  const Updated = {
      image: req.body.image,
    }
  Client.update(Updated , {where:{id:req.params.id}})
  .then(result =>
   res.status(201).json(result)
   )
  .catch(error=> 
  res.status(500).json(error)
  )
},
}