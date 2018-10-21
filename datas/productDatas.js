var Product = require('../src/model/Products');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ShoppingCart',{ useNewUrlParser: true });

var products = [
    new Product({
        name: "Adidias",
        price : 1000,
        imageUrl : "https://rukminim1.flixcart.com/image/832/832/jk01bww0/shoe/w/h/k/36848102-12-puma-quarry-black-original-imaf7fpfvubqaa9p.jpeg?q=70",
        gender: "male"
        
    }), 
    new Product({
        name: "Puma",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jl8bzbk0/shoe/v/g/x/36516007-11-puma-white-black-original-imaf8e62f6x4sbae.jpeg?q=70",
        gender: "male"
    }),
    new Product({
        name: "Puma",
        price : 5000,
        imageUrl : "https://rukminim1.flixcart.com/image/832/832/jk01bww0/shoe/u/b/z/36847403-7-puma-ribbon-red-black-white-original-imaf7fpfhhwmqy6r.jpeg?q=70",
        gender: "male"
    }),
    new Product({
        name: "Addidas",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jn0msnk0/shoe/a/f/p/db0679fw-18-7-adidas-cblack-carbon-grefiv-original-imaf9s6mvzsyj8zu.jpeg?q=70",
        gender: "male"
    }),
    new Product({
        name: "Puma",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jhkvgy80/shoe/g/7/3/364886-4-puma-purple-original-imaf5kb4xxwvkqsv.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Puma",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jn0msnk0/shoe/q/g/f/19106903-5-puma-pink-original-imaf9s23rhz9ygtg.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Puma",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jgffp8w0/shoe/y/t/m/36488605-40-5-puma-rapture-rose-original-imaf4zgp9h9ygvhz.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Addidas",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jialea80/shoe/v/y/6/aw3865-6-adidas-white-original-imaf64gh4gqhrttz.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Addidas",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jgmkwi80/shoe/g/t/u/cm7543-5-adidas-aerblu-chablu-aerpnk-original-imaf4tgjymfgzrba.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Addidas",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/jgmkwi80/shoe/g/t/u/cm7543-5-adidas-aerblu-chablu-aerpnk-original-imaf4tgjymfgzrba.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Vans",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/j4fwpzk0/shoe/c/p/9/vn0a348am1z1-8-vans-pop-outsole-black-racing-red-original-imaev4z8yenhszaa.jpeg?q=70",
        gender: "female"
    }),
    new Product({
        name: "Vans",
        price : 5000,
        imageUrl: "https://rukminim1.flixcart.com/image/832/832/j4fwpzk0/shoe/w/t/m/vn0a38frmv31-9-vans-2-tone-check-citrus-true-white-original-imaev3x3jrgdz9fe.jpeg?q=70",
        gender: "male"
    })

];

var count = 0;
for(var i=0; i<products.length; i++){
    products[i].save((err, data)=>{
        count++;
        console.log(data);
        if(count === products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}

mongoose.disconnect();