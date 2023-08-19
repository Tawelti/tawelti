const {Client}= require('../database/models/client')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports= {
  register: async (req, res) => {
    try {
  const { name, email, password, image } = req.body
  const existingUser = await Client.findOne({ where: { email } })
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' })
      }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await Client.create({
      name,
      email,
      password: hashedPassword,
      image,
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
    Client.findAll({where : {id : req.params.id } })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
},
updateClient:(req,res)=>{
    const Updated = {
        name: req.body.name,
        email: req.body.email,
      }
    Client.update(Updated , {where:{id:req.params.id}})
    .then(result =>
     res.status(201).json(result)
     )
    .catch(error=> 
    res.status(500).json(error)
    )
},
updateClientImage:(req,res)=>{
  const Updated = {
      image: req.body.image,
    }
  Client.update(Updated , {where:{id:req.params.id}})
  .then(result =>
   res.status(201).json(result)
   )
  .catch(error=> 
  res.status(500).json(error)
  )
},
getAllClients:(req,res)=>{
  Client.findAll()
  .then(result =>
    res.status(201).json(result)
    )
   .catch(error=> 
   res.status(500).json(error)
   )
}
}