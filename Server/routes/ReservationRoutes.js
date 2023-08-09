const router=require("express").Router()
const {createReservation , findAll , deleteById}=require("../controllers/reservationController")



router.post("/create",createReservation)
router.get("/get/:Places_id",findAll)
router.delete("/delete/:id",deleteById)





module.exports=router