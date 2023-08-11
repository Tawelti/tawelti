const router=require("express").Router()
const {addReservation,findAll,deleteReservation}=require("../controllers/reservationController")



router.post("/add/:Client_Id/:Places_Id",addReservation)
router.get("/get/:id",findAll)
router.delete("/delete/:reservationId",deleteReservation)




module.exports=router