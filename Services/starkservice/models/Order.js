var mongoose = require('mongoose');

var schema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: false
    },
    Cost: {
        type: String,
        required: false
    }      

});

mongoose.model('Order', schema);