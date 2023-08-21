const {Favorite }= require('../database/models/Favorite')
const { Places } = require('../database/models/places')


module.exports= {
   createFavorite: (req, res) => {
      const { clientId } = req.params
      const { Places_id } = req.body
  
      Favorite.create({
        Client_id: clientId,
        Places_id: Places_id, 
      })
        .then((response) => {
          res.status(200).json(response)
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error })
        });
    },

 getAllFavoritesByClientId: (req, res) => {
   const  {clientId} = req.params;

   Favorite.findAll({
    where: {
      Client_id: clientId,
    },
    include: [
      {
        model: Places,
        attributes: ['id', 'name', 'images'],
      },
    ] 
  })
    .then((respense) => {
      res.status(200).json(respense)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ error })
    });
},

 
}