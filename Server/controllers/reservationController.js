const {Reservation}= require('../database/models/Reservation')

module.exports= {
    createReservation : (req , res) => {
        Reservation.create({})
 },
 findAll : (req,res) => {
    Reservation.findAll({where : {Places_id : req.params.Places_id } })
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
    },
 }