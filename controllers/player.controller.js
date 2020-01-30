const Player = require("../models/player.model.js");
var settings = require("../config/settings");
var jwt = require("jsonwebtoken");
exports.create = (req, res) => {
  //Create a Player
  const player = new Player({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    address: req.body.address,
    association: req.body.association,
    password: req.body.password,
    teamName:req.body.teamName,
    jerseyNo:req.body.jerseyNo,
    ageGrp:req.body.ageGrp,
    dateofbirth:req.body.dateofbirth,
    gender:req.body.gender,
    bloodgrp:req.body.bloodgrp,
    nameofschool:req.body.nameofschool,
    highestQualification:req.body.highestQualification,
    state:req.body.state,
    city:req.body.city,
    pincode:req.body.pincode,
    instaId:req.body.instaId,
    facebookId:req.body.facebookId
  });
  player
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

exports.checkLogin = (req, res) => {
  Player.findOne({ email: req.body.email})
    .then(user => {
      // return the information including token as JSON
      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found."
        });
      } else {
        
        res.send(user);
      }
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};
exports.byAssociation = (req, res) => {
  Player.find({ association: req.body.association})
    .then(users => {
      console.log(req.body)
      //return the information including token as JSON
      if (users.length==0) {
        res.status(401).send({
          success: false,
          msg: "No Player Found"
        });
      } else {
                res.send(users);
      }
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};
