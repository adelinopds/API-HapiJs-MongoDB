const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Product', ProductSchema);