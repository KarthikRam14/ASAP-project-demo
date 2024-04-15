const mongoose = require('mongoose')

let UserData = mongoose.Schema({
    firstName:{
     type: String,
     required: true
    },    
    lastName:{
     type: String,
     required: true
    },    
    email:{
     type: String,
     required: true
    },    
    password:{
     type: String,
     required: true
    }    
})

const UserModel = mongoose.model("userdata", UserData)
module.exports = UserModel;