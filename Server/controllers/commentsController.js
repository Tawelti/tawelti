const {Commentes}= require('../database/models/Commentes');
const { Client } = require('../database/models/client');
const { Places } = require('../database/models/places');

const getPlaceImageById = (placeId) => {
  return Places.findByPk(placeId)
    .then((place) => {
      if (place) {
        return place.images;
      }
      return null;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
};

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
 getAllComment: async (req, res) => {
  const placeId = req.params.placeId;

  try {
    const placeImage = await getPlaceImageById(placeId);
    const comments = await Commentes.findAll({
      where: {
        Places_id: placeId,
      },
      include: [
        {
          model: Client,
          attributes: ['id', 'name', 'email', 'password', 'image'],
        },
      ],
    });

    res.status(200).send({ placeImage, comments });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
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
},


}