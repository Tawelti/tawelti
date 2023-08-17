const {Seller}= require('../database/models/seller')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports= {
  register: async (req, res) => {
    try {
  const { name, email, password, image, patentimage } = req.body
  const existingUser = await Seller.findOne({ where: { email } })
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' })
      }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await Seller.create({
      name,
      email,
      password: hashedPassword,
      image,
      patentimage,
      })
      const token = jwt.sign({ userId: newUser.id, email: newUser.email }, 'so-secret', {
        expiresIn: '1h',
      })

      res.status(201).json({ message: 'User registered successfully', token, user: newUser })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'An error occurred' })
    }
  },


 getOneByid : (req,res) => {
    Seller.findAll({where : {id : req.params.id } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
},
updateSeller:(req,res)=>{
    const Updated = {
        name: req.body.name,
        email: req.body.email,
      }
    Seller.update(Updated , {where:{id:req.params.id}})
    .then(result =>
     res.status(201).json(result)
     )
    .catch(error=> 
    res.status(500).json(error)
    )
},
getByEmail: (req, res) => {
  const { email } = req.params;
  Seller.findOne({ where: { email } })
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'Seller not found' });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
},
markAsPayed: async (req, res) => {
  const sellerId = req.params.id;

  try {
    // Find the seller by ID
    const seller = await Seller.findByPk(sellerId);

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    
    seller.payed = 1;
    await seller.save();

    res.status(200).json({ message: 'Seller marked as payed', seller });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
},

}