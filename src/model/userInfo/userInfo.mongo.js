const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  id:Number,
  name:String,
  gender:String,
  age:String,
  dob:String,
  address:String,
  isGreen:Boolean 
});

module.exports = mongoose.model("userInfo", userInfoSchema);
