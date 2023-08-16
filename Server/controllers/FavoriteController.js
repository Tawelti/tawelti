const {Favorite}= require('../database/models/Favorite')

module.exports= {
 createFavorite : (req , res) => {
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

 
}