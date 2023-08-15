const { Router } = require("express");
const { addPlace,getOne, getAllPlaces,deletePlace,getAllApprovedAndVipPlaces,getAllAppCategoryPlaces , getAllPlacesWhereSellerId} = require("../controllers/placesController");

const router = Router();

router.post("/create/:Seller_id", addPlace);
router.get("/getPlaces", getAllPlaces);
router.get("/getApp&type/:type", getAllApprovedAndVipPlaces);
router.get("/getApp&cat/:category", getAllAppCategoryPlaces);
router.delete("/deletePlace/:id",deletePlace)
router.get("/get/:Seller_id",getAllPlacesWhereSellerId)
router.get("/get/:id",getOne)

module.exports = router;
