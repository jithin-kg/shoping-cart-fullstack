
const express = require('express');
const chalk = require('chalk');

var Product  = require('../model/Products');
const auth = require('./auth');

const router = express.Router();


router.route('/filter')
    .get((req, res)=>{
        var brand = req.query.brand;
        var gndr = req.query.gender;
        Product.find({name:brand, gender:gndr }, (err, data)=>{
            if(err){

                res.end();
                
            }
            console.log(data);
            res.render('index', {data,cartTotalItems: (req.session.cart) ? req.session.cart.totalQty: 0});
        })
    }) 

router.route('/:id')
        .get((req,res)=>{
            Product.findById((req.params.id), ( err, pdtItem )=>{
                if(err){
                    return console.log(err);
                }

                res.render('productItem', {pdtItem,cartTotalItems: (req.session.cart) ? req.session.cart.totalQty: 0})
            })
        });















module.exports = router;