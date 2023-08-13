const {Products}= require('../database/models/products')

module.exports= {
   Create:  (req, res) => {
      Products.create({
          productname: req.body.productname,
          price: req.body.price,
          image: req.body.image,
          Places_id: req.params.Places_id,
          category : req.params.category
      
   
        })
          .then((result) => {
            res.status(200).send(result);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      },

      getAll : (req, res) => {
         Products.findAll({where : {Places_id: req.params.Places_id}})
            .then((places) => {
              res.status(200).json(places);
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ error});
            });
        },
      getAllByPlaceIdAndCategory : (req , res)  => {
         Products.findAll({where : {Places_id: req.params.Places_id , category : req.params.category }})
         .then((places) => {
           res.status(200).json(places);
         })
         .catch((error) => {
           console.error(error);
           res.status(500).json({ error});
         });
      }
}