const router=require("express").Router()
const {createClaim}=require("../controllers/claimController")



router.post("/create",createClaim)





module.exports=router