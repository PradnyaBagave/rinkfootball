const mongoose = require('mongoose');
 
const OfficialSchema = mongoose.Schema({
    designation: String,
    firstname: String,
    lastname: String,
    organisationname: String,
    contact: Number, 
    email: String,
    pincode:Number,
    address:String,
    password:String,
    bloodgroup:String,
    facebookid:String,
    instaid:String,
  
  active: {
        type: Boolean,
        default: false
    }
});
 
module.exports = mongoose.model('Official', OfficialSchema);
