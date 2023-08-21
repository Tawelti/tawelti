const router= require("express").Router()

const {register , getOneByid , updateSeller,getByEmail, getAll,markAsPayed, acceptSeller}=require("../controllers/sellerController")




router.post("/register",register)
router.get("/get/:id",getOneByid)
router.put("/update/:id",updateSeller)
router.get("/email/:email",getByEmail)
router.get("/payed/:id",markAsPayed)
router.get("/all",getAll)
router.put("/accept/:id",acceptSeller)







module.exports=router