const router=require("express").Router()
const { Router } = require("express")
const {Add,Verify}=require ("../controllers/Payment")

router.post("/pay/:amount",Add)
router.get("/verify/:id",Verify)
module.exports=router