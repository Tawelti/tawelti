const {Reservation}= require('../database/models/Reservation')

module.exports= {
  //add reservation
    addReservation(req,res) {
const reservationDate=req.body;

         Reservation.create({...reservationDate,Client_id:req.params.Client_id,Places_id:req.params.Places_id })
        .then(reservation => {
          res.status(201).json({message:'add successfuly',reserve:reservation})
        })
        .catch(error => {
            res.status(500).json({ error: "Failed to add reservation" });
          console.error('Error adding reservation:', error);
        });
      },
      //find  reservation by id
    findAll(req, res) {
        Reservation.findAll({where : {id : req.params.id } })
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
      },
      //delete reservation by id
      deleteReservation (req, res)  {
        const id = req.params.id; 
      
        Reservation.findByPk(id)
          .then(reservation => {
            if (!reservation) {
              return res.status(404).json({ error: 'Reservation not found' });
            }
            return reservation.destroy();
          })
          .then(() => {
            res.status(200).json({ message: 'Reservation deleted successfully' });
          })
          .catch(error => {
            console.error('Error deleting reservation:', error);
            res.status(500).json({ error: 'Failed to delete reservation' });
          });
      }
    }
