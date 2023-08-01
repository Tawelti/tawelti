const router=require("express").Router()
const {createAdmin}=require("../controllers/AdminContoller")



router.post("/create",createAdmin)





module.exports=router