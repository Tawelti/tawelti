const router=require("express").Router()
const {createOrder , getOrders ,getOrdersByClientId , deleteOrder}=require("../controllers/orderController")



router.post("/create/:ClientId/:Products_id/:Reservation_id",createOrder)
router.get("/get/:id", getOrders)
router.get("/getAll/:clientId", getOrdersByClientId)
router.delete("/delete/:id", deleteOrder)





module.exports=router