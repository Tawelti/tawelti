const {Favorite}= require('../database/models/Favorite')

module.exports= {
 createFavorite : (req , res) => {
   const { clientId, placeId } = req.params;
    Favorite.create({
      Client_id: clientId,
       Place_id: placeId,
    })
    .then((respense) => {
      res.status(200).json(respense);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error });
    });
 },

 getAllFavoritesByClientId: (req, res) => {
   const { clientId , placeId} = req.params;


   Favorite.findAll({
     where: {
       Client_id: clientId,
     },
   })
   .then((favorites) => {
     res.status(200).json(favorites);
   })
   .catch((error) => {
     console.error(error);
     res.status(500).json({ error });
   });
},

 
}