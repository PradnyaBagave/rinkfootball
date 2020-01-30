var players = require('../controllers/player.controller');
    var express = require('express');
    var router = express.Router();
  // Create a new Customer
    router.post("/", players.create);
 
//     // Retrieve all Customer
//     app.get('/api/customers', customers.findAll);
 
//     // Retrieve a single Customer by Id
//     app.get('/api/customer/:customerId', customers.findOne);
 
//     // Update a Customer with Id
//     app.put('/api/customer/:customerId', customers.update);
  
   // Login Player
     router.post('/login',players.checkLogin);
     router.post('/byAssociation',players.byAssociation);
    
//     // Delete a Customer with Id
//     app.delete('/api/customer/:customerId', customers.delete);
module.exports = router;