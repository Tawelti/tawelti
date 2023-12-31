const { Places } = require("../database/models/places");

module.exports = {
    //Add Place
    addPlace(req, res) {
      console.log(req.body);
      const placeData = req.body;
    // if(req.body.patentimage) throw new Error('hi')
      Places.create({ ...placeData, Seller_id: req.params.Seller_Id })
        .then((newPlace) => {
          res.status(201).json({ message: "New place added successfully", place: newPlace });
        })
        .catch((error) => {
          console.log(error); 
          console.error(error.stack);   
          res.status(500).json({ error: "Failed to add a new place" });
        });;
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
  
      Places.findAll({where : {id : req.params.id } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
    },
  
  //Get all vip and approved places
  getAllApprovedAndVipPlaces(req, res) {
    const type=req.params.type
    Places.findAll({
      where: {
        approved: true,
        type: type,
      },
    })
      .then((places) => {
        res.status(200).json(places);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Failed to get places" });
      });
  },


  getAllAppCategoryPlaces(req, res) {
    const category=req.params.category
    Places.findAll({
      where: {
        category: category,
      },
    })
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
  //get places by seller id
  getAllPlacesWhereSellerId : (req , res) => {
    Places.findAll({where : {Seller_id : req.params.Seller_id } })
    .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
 },

};