const router=require("express").Router()
const {createTables}=require("../controllers/tablesController")



router.post("/create",createTables)





module.exports=router