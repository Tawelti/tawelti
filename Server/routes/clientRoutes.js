const router=require("express").Router()
const {register , getOneByid , updateClient}=require("../controllers/clientController")



router.post("/register",register)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateClient)





module.exports=router