const {Reservation}= require('../database/models/Reservation')

module.exports= {
    createReservation : (req , res) => {
        Reservation.create({})
 }
}