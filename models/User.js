const mongoose = require("mongoose");
const UserModel = mongoose.model("user", {
    name:{
        type:String,
        required : true,
        minLength:3,
        maxLenght:30,
        trim:true
    },
    family:{
        type:String,
        required : true,
        minLength:3,
        maxLenght:30,
        trim:true
    },
    phone:{
        type:String,
        required : true,
        minLength:10,
        maxLenght:14,
        trim:true
    },
    email:{
        type:String,
        required : true,
        minLength:10,
        trim:true
    },
    state:{
        type:Boolean,
        default : false
    }
});

module.exports = {UserModel}