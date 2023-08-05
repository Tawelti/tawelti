const { Router } = require("express");
const { addPlace, getAllPlaces,deletePlace,getOne } = require("../controllers/placesController");

const router = Router();

router.post("/create/:id_seller", addPlace);
router.get("/getPlaces", getAllPlaces);
router.get("/getOne/:Seller_id",getOne)
router.delete("/deletePlace/:id/:Seller_id",deletePlace)
module.exports = router;
