const router= require("express").Router()
const {register , getOneByid , updateSeller,getByEmail}=require("../controllers/sellerController")



router.post("/register",register)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateSeller)
router.get("/email/:email",getByEmail)






module.exports=router