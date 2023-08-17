const router=require("express").Router()
const {createFavorite , getAllFavoritesByClientId}=require("../controllers/FavoriteController")



router.post("/create/:clientId", createFavorite);
router.get("/getAllFavorites/:clientId", getAllFavoritesByClientId);





module.exports=router