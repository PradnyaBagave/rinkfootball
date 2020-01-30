    var officials = require('../controllers/officials.controller.js');
    var express = require("express");
    var router = express.Router();
  // Create a new Customer
     router.post('/register', officials.create);
 
//     // Retrieve all Customer
//      router.get('/api/customers', customers.findAll);
 
//     // Retrieve a single Customer by Id
//      router.get('/api/customer/:customerId', customers.findOne);
 
//     // Update a Customer with Id
//      router.put('/api/customer/:customerId', customers.update);
  
   // Login Player
    router.post('/login',officials.checkLogin);
 
   module.exports = router;