const { Places } = require("../database/models/places");

module.exports = {
  //Add Place
  addPlace(req, res) {
    console.log(req.body);
    const placeData = req.body;
  // if(req.body.patentimage) throw new Error('hi')
    Places.create({ ...placeData, Seller_id: req.params.Seller_id })
      .then((newPlace) => {
        res.status(201).json({ message: "New place added successfully", place: newPlace });
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
  //get one
  getOne(req, res) {
    const Seller_id = req.params.Seller_id;

    Places.findAll({ where: { Seller_id } })
      .then((places) => {
        res.status(200).json(places);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get places by seller ID" });
      });
  },
  //Delete place by ID
  deletePlace(req, res) {
    const Seller_id = req.params.Seller_id;
    const placeId = req.params.id;

    Places.destroy({ where: { id: placeId, Seller_id } })
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
