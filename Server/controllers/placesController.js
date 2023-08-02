const { Places } = require("../database/models/places");

module.exports = {
    //Add Place
  addPlace(req, res) {
    const placeData = req.body;
    Places.create(placeData)
      .then((newPlace) => {
        res.status(201).json(newPlace);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to add a new place" });
      });
  },
//Get all places
  getAllPlaces(req, res) {
    Places.findAll()
      .then((places) => {
        res.status(200).json(places);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get places" });
      });
  },
  //Delete place by ID
  deletePlace(req, res) {
    const placeId = req.params.id;

    Places.destroy({ where: { id: placeId } })
      .then((rowsDeleted) => {
        if (rowsDeleted === 0) {
          return res.status(404).json({ error: "Place not found" });
        }
        res.status(200).json({ message: "Place deleted successfully" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to delete place" });
      });
  },
};