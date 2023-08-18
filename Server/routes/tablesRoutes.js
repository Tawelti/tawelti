const router=require("express").Router()
const { addTable,findAllTables, findTablesByID,deleteTableByID,updateTable,getAlltablesWhereOrderId,findTablesByPlaceID}=require("../controllers/tablesController")



router.post("/add/:PlaceId/:Order_id",addTable)
router.get("/get/:number",findTablesByID)
router.get("/get",findAllTables)
router.delete("/delete/:id",deleteTableByID)
router.put("/update/:id",updateTable)
router.get("/getOrder/:Order_id",getAlltablesWhereOrderId)
router.get("/getByPlace/:PlaceId",findTablesByPlaceID)

module.exports=router