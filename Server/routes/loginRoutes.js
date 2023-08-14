const router=require("express").Router()
const {login}=require("../controllers/login")
const {Client}= require('../database/models/client')
const {Seller}= require('../database/models/seller')


router.post('/', async (req, res) => {
const { email, password } = req.body;
  try {
   const clientUser = await Client.findOne({ where: { email } })
      const sellerUser = await Seller.findOne({ where: { email } })
      if (clientUser) {
        const loginResult = await login('client', email, password)
        res.json(loginResult)
      } else if (sellerUser) {
        const loginResult = await login('seller', email, password)
        res.json(loginResult)
      } else {
        return res.status(404).json({ message: 'User not found' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'An error occurred' })
    }
  }) 

  
  
module.exports=router
  