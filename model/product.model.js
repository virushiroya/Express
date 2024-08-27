const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id : {
        type : Number
    },
    title : {
        type: String
    },
    description : {
        type : String
    },
    discountPercentage : {
        type : Number
    },
    rating : {
        type : Number
    },
    stock : {
        type : Number
    },
    brand : {
        type: String
    },
    category : {
        type: String
    },
});

module.exports = mongoose.model('Product', productSchema);