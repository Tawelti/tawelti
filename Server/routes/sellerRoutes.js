const router= require("express").Router()
const {createseller , getOneByid , updateSeller}=require("../controllers/sellerController")



router.post("/create",createseller)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateSeller)





module.exports=router