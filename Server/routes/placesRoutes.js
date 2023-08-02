const { Router } = require("express");
const { addPlace, getAllPlaces,deletePlace } = require("../controllers/placesController");

const router = Router();

router.post("/create", addPlace);
router.get("/getPlaces", getAllPlaces);
router.delete("/deletePlace/:id",deletePlace)
module.exports = router;
