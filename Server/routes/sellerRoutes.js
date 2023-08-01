const router= require("express").Router()
const {createseller}=require("../controllers/sellerController")



router.post("/create",createseller)





module.exports=router