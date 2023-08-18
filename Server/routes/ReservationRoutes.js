const router=require("express").Router()
const {addReservation,findAll,deleteReservation,getOne}=require("../controllers/reservationController")



router.post("/add/:Client_id/:Places_id",addReservation)
router.get("/get/:id",findAll)
router.delete("/delete/:id",deleteReservation)
router.get('/getOne/:Places_id',getOne)



module.exports=router