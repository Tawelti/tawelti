const router=require("express").Router()
const {createClient , getOneByid , updateClient}=require("../controllers/clientController")



router.post("/create",createClient)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateClient)





module.exports=router