const sequelize = require('../database/configdb');
const { Order } = require('../database/models/order');
const { Products } = require('../database/models/products')

module.exports = {
   createOrder: (req, res) => {
      const clientId = req.params.ClientId
      const productId = req.params.Products_id 
      const reservationId = req.params.Reservation_id
    
      Products.findOne({
        where: { id: productId },
        attributes: ['price'], 
      })
      .then((product) => {
        if (!product) {
          return res.status(404).json({ error});
        }
  
        const totalAmount = product.price;
  
        return Order.create({
          totalamount: totalAmount,
          paymentstatus: req.body.paymentstatus,
          ClientId: clientId,
          Products_id: productId,
          Reservation_id: reservationId,
        });
      })
      .then((createdOrder) => {
        res.json(createdOrder); 
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error });
      });
    },
  getOrders: (req, res) => {
    const orderId = req.params.id
    Order.findOne({
      where: { id: orderId },
      include: [
        {
          model: Products,
          attributes: ['productname', 'price', 'image'],
        },
      ],
    })
      .then((result) => {
          res.json(result);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: error.message });
      });
  },
  
  getOrders: (req, res) => {
   const orderId = req.params.id;
   Order.findAll({
     where: { id: orderId },
     include: [
       {
         model: Products,
         attributes: ['productname', 'price', 'image'],
       },
     ],
   })
     .then((results) => {
      res.json(results)
     })
     .catch((error) => {
       console.error(error)
       res.status(500).json({ error: error.message })
     });
 },
 getOrdersByClientId: (req, res) => {
   const clientId = req.params.clientId; 
   Order.findAll({
     where: { ClientId: clientId }, 
     include: [
       {
         model: Products,
         attributes: ['productname', 'price', 'image'],
       },
     ],
   })
     .then((orders) => {
       if (orders.length === 0) {
         res.status(404).json({ error })
       } else {
         res.json(orders)
       }
     })
     .catch((error) => {
       console.error(error)
       res.status(500).json({ error})
     });
 },
 
 deleteOrder: (req, res) => {
  const orderId = req.params.id;

  Order.destroy({
    where: { id: orderId },
  })
    .then((respense) => {
        res.json({respense});
      })
    .catch((error) => {
      res.status(500).json({error});
    });
},
};
