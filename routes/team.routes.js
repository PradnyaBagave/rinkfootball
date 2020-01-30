var teams = require("../controllers/team.controller");
var express = require("express");
var router = express.Router();
router.post("/register", teams.create);
router.post("/login", teams.checkLogin);
router.post("/byAssociation", teams.byAssociation);
module.exports = router;
