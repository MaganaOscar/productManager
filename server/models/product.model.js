const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: String,
    price: {
        type: Number,
        get: v => +(v.toFixed(2)),
        set: v => +(v.toFixed(2))
    },
    description: String
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;