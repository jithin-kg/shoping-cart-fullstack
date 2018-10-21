const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ShoppingCart',{ useNewUrlParser: true });

const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name : String,
    price: Number,  
    imageUrl : String,
    gender: String
});


const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;