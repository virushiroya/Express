const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    firstName : String, //short hand property
    lastName : {
        type: String
    },
    email : {
        type : String
    },
    age : {
        type : Number
    },
    hobbies : [{type:String}],
    address : {
        line1 : String,
        line2 : String,
        pincode : Number
    }
});

module.exports = mongoose.model('Product', productSchema);