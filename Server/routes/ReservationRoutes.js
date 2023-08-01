const router=require("express").Router()
const {createReservation}=require("../controllers/reservationController")



router.post("/create",createReservation)





module.exports=router