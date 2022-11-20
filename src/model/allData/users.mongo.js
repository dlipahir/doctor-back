const mongoose = require('mongoose')




const UserSchema = new mongoose.Schema({
   name:String,
   id:Number
})




module.exports =  mongoose.model("user",UserSchema);


