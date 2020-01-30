const Official = require("../models/officials.model.js");
exports.create = function(req, res) {
  //Create a Official
  const official = new Official({
    designation: req.body.designation,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    organisationname: req.body.organisationname,
    contact: req.body.contact,
    email: req.body.email,
    pincode: req.body.pincode,
    address: req.body.address,
    password: req.body.password,
    bloodgroup: req.body.bloodgroup,
    facebookid: req.body.facebookid,
    instaid: req.body.instaid
  });
  official
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.checkLogin = function(req, res) {
  Official.findOne({ email: req.body.email })
    .then(user => {
      // return the information including token as JSON
      let newUser = {
        designation: user.designation,
        firstname: user.firstname,
        lastname: user.lastname,
        organisationname: user.organisationname,
        contact: user.contact,

        email: user.email,
        pincode: user.pincode,
        address: user.address,
        bloodgroup: user.bloodgroup,
        facebookid: user.facebookid,
        instaid: user.instaid,
        userId: user._id
      };
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};
