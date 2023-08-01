const router=require("express").Router()
const {createPlaces}=require("../controllers/placesController")



router.post("/create",createPlaces)





module.exports=router