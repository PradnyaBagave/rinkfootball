
 
    var teamselecteds = require('../controllers/teamselected.controller');
    var express = require('express');
    var router = express.Router();
  // Create a new Customer
    router.post("/", teamselecteds.create);
 
//     // Retrieve all Customer
//     app.get('/api/customers', customers.findAll);
 
//     // Retrieve a single Customer by Id
//     app.get('/api/customer/:customerId', customers.findOne);
 
//     // Update a Customer with Id
//     app.put('/api/customer/:customerId', customers.update);
  
   // Login Player
     router.post('/getTeam',teamselecteds.getteam);
     router.post('/byAssociation',teamselecteds.byAssociation);
    
//     // Delete a Customer with Id
//     app.delete('/api/customer/:customerId', customers.delete);
module.exports = router;