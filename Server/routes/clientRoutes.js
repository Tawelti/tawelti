const router=require("express").Router()
const {register , getOneByid , updateClient, getAllClients,getByEmail}=require("../controllers/clientController")



router.post("/register",register)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateClient)
router.get("/getAllClient",getAllClients)
router.get("/email/:email",getByEmail)





module.exports=router