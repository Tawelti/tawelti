const {Tables}= require('../database/models/tables')

module.exports= {
    addTable(req, res) {
        const tableReserve = req.body;
              tableReserve.reserved = 1;
      
        Tables.create({
          ...tableReserve,
          PlaceId: req.params.PlaceId,
          Order_id: req.params.Order_id
        })
        .then(reserve => {
          res.status(201).json({ message: 'Added table successfully', reserve });
        })
        .catch(error => {
          console.error('Error adding table:', error);
          res.status(500).json({ error: 'Failed to add table' });
        });
      }
      
      ,
      
      findTablesByID(req, res) {
        Tables.findAll({ where: { number: req.params.number } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
},
findTablesByPlaceID(req, res) {
    Tables.findAll({ where: { PlaceId: req.params.PlaceId } })
.then((result) => {
  res.json(result);
})
.catch((err) => {
  res.status(500).send(err);
});
},
      findAllTables(req, res) {
        Tables.findAll()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
      },
      deleteTableByID  (req, res)  {
        const tableId = req.params.id; 
      
        Tables.destroy({
          where: { id: tableId }
        })
          .then(() => {
            res.status(200).json({ message: 'Table deleted successfully' });
          })
          .catch(err => {
            res.status(500).json({ error: 'Error deleting table', details: err.message });
          });
      },
      updateTable(req, res) {
        const id = req.params.id;
      
        Tables.update(
          { reserved: 1 }, 
          { where: { id: id, reserved: 0 } }
        )
          .then((result) => {
            if (result[0] === 0) {
              return res.status(404).json({ message: 'Table not found or already reserved' });
            }
            res.status(200).json({ message: 'Table reservation status updated' });
          })
          .catch(error => {
            console.error('Error updating table reservation', error);
            res.status(500).json({ error: 'Failed to update table reservation' });
          });
      }
      ,
      getAlltablesWhereOrderId : (req , res) => {
        Tables.findAll({where : {Order_id : req.params.Order_id } })
        .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
     }
}