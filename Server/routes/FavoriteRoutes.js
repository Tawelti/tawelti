const router=require("express").Router()
const {createFavorite}=require("../controllers/FavoriteController")



router.post("/create",createFavorite)





module.exports=router