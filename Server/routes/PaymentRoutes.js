const router=require("express").Router()
const { Router } = require("express")
const {intent}=require ("../controllers/Payment")

router.post("/pay/:amount",intent)

module.exports=router