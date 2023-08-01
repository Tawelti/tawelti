const router=require("express").Router()
const {createComments}=require("../controllers/commentsController")



router.post("/create",createComments)





module.exports=router