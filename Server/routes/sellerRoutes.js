const router= require("express").Router()
const {register , getOneByid , updateSeller}=require("../controllers/sellerController")



router.post("/register",register)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateSeller)





module.exports=router