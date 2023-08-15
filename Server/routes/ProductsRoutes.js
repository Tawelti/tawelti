const router= require("express").Router()
const {Create , getAll , getAllByPlaceIdAndCategory}=require("../controllers/ProductsController")



router.post("/create/:Places_id/:category", Create);
router.get("/getAllwhere/:Places_id", getAll);
router.get("/getAll/:Places_id/:category", getAllByPlaceIdAndCategory);



module.exports=router