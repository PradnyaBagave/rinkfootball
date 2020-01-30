const Teamselected = require("../models/teamselected.js");
var settings = require("../config/settings");
var jwt = require("jsonwebtoken");
exports.create = (req, res) => {
  //Create a Player
  const teamselected = new Player({
    team: req.body.team,
    player: req.body.player
  });
  teamselected
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

exports.getteam = (req, res) => {
  Teamselected.findOne({ team: req.body.team})
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
  Teamselected.find({ association: req.body.association})
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
