var mongoose = require('mongoose');

var schema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    address: {
        type: Object,
        required: false
    },
    payments: {
        type: Array,
        required: false
    },
    cardcost: {
        type: Number,
        required: false
    },
    discount: {
        type: Number,
        required: false
    },
    price: {
        type: Number,
        required: false
    }           

});
mongoose.model('Save', schema);