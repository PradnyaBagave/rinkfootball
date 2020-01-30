const Team = require("../models/team.model.js");
exports.create = (req, res) => {
  //Create a Player
  const team = new Team({
    teamname: req.body.teamname,
    teamcontact: req.body.teamcontact,
    coachname: req.body.coachname,
    coachcontact: req.body.coachcontact,
    agegroup: req.body.agegroup,
    password: req.body.password,
    email: req.body.email,
    jersey: req.body.jersey,
    arrival: req.body.arrival,
    association:req.body.association,
    facebookid: req.body.facebookid,
    instaid: req.body.instaid
  });
  team
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
  Team.findOne({ email: req.body.email })
    .then(user => {
      
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};
exports.byAssociation = (req, res) => {
  Team.find({ association: req.body.association })
    .then(user => {
      
      res.send(user);
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    });
};