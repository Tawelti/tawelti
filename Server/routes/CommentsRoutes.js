const router=require("express").Router()
const {createComments, getAllComment, deleteOne}=require("../controllers/commentsController")



router.post("/:Client_id/:Places_id/:Places_Seller_id",createComments)
router.get ("/:placeId",getAllComment)
router.delete("/:commentId",deleteOne)