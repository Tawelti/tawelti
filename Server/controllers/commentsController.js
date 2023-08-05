const {Commentes}= require('../database/models/Commentes');
const { Client } = require('../database/models/client');
const { Places } = require('../database/models/places');

module.exports= {
 createComments : (req , res) => {
   const { comment, rating} = req.body;
   const Client_id = req.params.Client_id;
   const Places_id = req.params.Places_id;
   const Places_Seller_id = req.params.Places_Seller_id;
    Commentes.create({comment,rating,Client_id,Places_id,Places_Seller_id})
    .then((reslmt) => {
      res.status(201).send(reslmt);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
    
 },
 getAllComment:(req,res)=>{
   const id =req.params.placeId
 
   Commentes.findAll({
      include:[
         {
            model:Client,
            attributes: ['id','name','email','password','image']
         },
         {
            model:Places,
           where:{id:id}
         }
      ]
   })
   .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
 },
 deleteOne:(req,res)=>{
   const id=req.params.commentId
   Commentes.destroy({where:{id:id}})
   .then(() => {
      res.status(200).send('Comment has been deleted');
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
 },
 updateRate: (req, res) => {
  const rating = req.body.rating;
  const clientId = req.params.clientId;
  Commentes.update(
    { rating: rating },
    {
      where: {
        Client_id: clientId, 
      },
    }
  )
    .then((status) => {
      res.status(200).send({ message: 'Rating updated successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Error updating rating' });
    });
}
}