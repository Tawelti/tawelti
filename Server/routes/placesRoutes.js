const { Router } = require("express");
const { addPlace, getAllPlaces,deletePlace,getAllApprovedAndVipPlaces,getAllAppCategoryPlaces , getAllPlacesWhereSellerId} = require("../controllers/placesController");

const router = Router();

router.post("/create/:id_seller", addPlace);
router.get("/getPlaces", getAllPlaces);
router.get("/getApp&type/:type", getAllApprovedAndVipPlaces);
router.get("/getApp&cat/:category", getAllAppCategoryPlaces);
router.delete("/deletePlace/:id",deletePlace)
router.get("/get/:Seller_id",getAllPlacesWhereSellerId)
module.exports = router;
