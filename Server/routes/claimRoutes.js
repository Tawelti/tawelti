const router=require("express").Router()
const {createClaim, getAllClaim}=require("../controllers/claimController")



router.post("/:Client_id/:Places_id",createClaim)
router.get("/getAllClaim",getAllClaim)





module.exports=router