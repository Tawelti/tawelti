const router=require("express").Router()
const {createClient}=require("../controllers/clientController")



router.post("/create",createClient)





module.exports=router