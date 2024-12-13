const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        "title": {
            type: String,
            required: [true, "Please enter the id of the product"]
        },
        "images": {
            type: String,
            required: [true, "Please enter the URL to the image"]
        },
        "price": {
            type: Number,
            required: true
        },
        "quantity": {
            type: Number,
            required: true,
            default: 0
        },
        "category": {
            type: String,
            required: [true, "Please enter the category"]
        }
    },
    {
        timestaps: true
    }
);

const Product = mongoose.model("Product", ProductSchema) ;
module.exports = Product;