const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String, //short hand property
    lastName : {
        type: String
    },
    email : {
        type : String
    },
    password : {
        type : Number
    },
    mobileNo : {
        type : String
    },
    profileImage : {
        type : String
    },
    age : {
        type : number
    },
    address : {
        line1 : String,
        line2 : String,
        pincode : Number
    },
    isDelete : {
        type : Boolean,
        default : false
    },
},
{
    versionKey : false,
    timestamps : true
}
);

module.exports = mongoose.model('user', userSchema);