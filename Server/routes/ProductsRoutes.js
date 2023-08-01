const router=require("express").Router()
const {createProducts}=require("../controllers/ProductsController")



router.post("/create",createProducts)





module.exports=router