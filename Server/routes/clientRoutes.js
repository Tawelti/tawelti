const router=require("express").Router()
const {register , getOneByid , updateClient, getAllClients}=require("../controllers/clientController")



router.post("/register",register)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateClient)
router.get("/getAllClient",getAllClients)





module.exports=router