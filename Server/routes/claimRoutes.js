const router=require("express").Router()
const {createClaim}=require("../controllers/claimController")



router.post("/:Client_id/:Places_id",createClaim)





module.exports=router