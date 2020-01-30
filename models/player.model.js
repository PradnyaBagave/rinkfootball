const mongoose = require('mongoose');
 
const PlayerSchema = mongoose.Schema({
    firstname: String,
    lastname:String,
  age: { type: Number, min: 3, max: 40, required: true },
  phonenumber:Number,

  teamName:String,
  jerseyNo:Number,
  ageGrp:String,
  dateofbirth:Date,
  gender:String,
  bloodgrp:String,
  nameofschool:String,
  highestQualification:String,
  state:String,
  city:String,
  pincode:String,
  instaId:String,
  facebookId:String,
  address:String,
  association:String,
  email:String,
  password:String,
  active: {
        type: Boolean,
        default: false
    }
});
 
module.exports = mongoose.model('Player', PlayerSchema);