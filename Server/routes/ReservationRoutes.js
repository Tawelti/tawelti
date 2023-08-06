const router=require("express").Router()
const {createReservation , findAll}=require("../controllers/reservationController")



router.post("/create",createReservation)
router.get("/get/:Places_id",findAll)





module.exports=router