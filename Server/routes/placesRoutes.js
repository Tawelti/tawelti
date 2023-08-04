const { Router } = require("express");
const { addPlace, getAllPlaces,deletePlace,getAllApprovedAndVipPlaces } = require("../controllers/placesController");

const router = Router();

router.post("/create", addPlace);
router.get("/getPlaces", getAllPlaces);
router.get("/getApp&type/:type", getAllApprovedAndVipPlaces);
router.delete("/deletePlace/:id",deletePlace)
module.exports = router;
