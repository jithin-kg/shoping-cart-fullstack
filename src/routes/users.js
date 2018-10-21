const express = require('express');
const chalk = require('chalk');
const bcrypt = require('bcrypt');
var Product  = require('../model/Products');
var Cart = require('../model/cart');
const auth = require('./auth');

var User = require('../model/usersModel');
const router = express.Router();
const saltRounds = 10;    

router.route('/signup')
        .post(( req, res )=>{
            console.log(chalk.yellow('inside signup'));
            var password = req.body.password;
          console.log(chalk.red(req.body.name));
          if (req.body.name &&
            req.body.email &&
            req.body.password &&
            req.body.pwdcofm) {
           
           var newUser = new User();
           newUser.name = req.body.name;
           newUser.email = req.body.email;
           newUser.password = newUser.generateHash(req.body.password);

           newUser.save((err, data)=>{
               if(err){
                res.end()
                return console.log(chalk.blue(err));           
               }
               res.redirect('/');
               console.log(data);
           });
        
       }else{
        //res.end  
        return;
       }
        })

router.route('/login')
        .get((req, res)=> {
            res.render('login');
        })
        .post(( req, res)=>{
            let email = req.body.email;
             let password = req.body.password;
             
             if(email && password){

                User.findOne({email: email},(err, user)=>{
                    if(err){
                        res.end();
                        return console.log(chalk.blue("Error while finding login user details"));
                    }
                    if(!user.validPassword(password)){
                        return console.log(chalk.red("password doesn't match"));
                        res.redirect('/');
                    }
                    req.session.user = user; ///add the uset to the session
                    console.log(chalk.green(req.session.user));
                    res.redirect('/');
                    console.log("varified password");
                    console.log(chalk.blue(user));
                })
             }
        })
        

router.route('/add-to-cart/:id')
        .get(( req, res )=>{
           var productId = req.params.id; 
           var cart = new Cart((req.session.cart ? req.session.cart: {} ) );
           Product.findById(productId, ( err, data )=> {

               if(err){
                   
                   res.redirect('/');
                   return console.log(chalk.blue(err));
               }
               cart.add(data, data.id);
               req.session.cart = cart;        
               req.session.myCartItems = req.session.cart.generateArray()
         
               res.redirect('/');

           });


        });

//buy now checkout
router.get('/checkout/:id',auth, (req, res )=> {
            Product.findById(req.params.id, (err,pdtData)=>{
                res.send("succesfylly placed order");
            });
        });
//view cart
router.get('/cart', (req, res)=>{

    if(req.session.myCartItems){
        console.log("insiide cart items")

      res.render('cartView',{data:(req.session.myCartItems),
          totalQantity : (req.session.cart.totalPrice),
            agtPrice : (req.session.cart.totalPrice),
            cartTotalItems: (req.session.cart) ? req.session.cart.totalQty: 0
            })     
    }else{
        res.redirect('/')
    }
} )

 // Logout endpoint
router.route('/logout')
 .get( (req, res)=> {
    req.session.destroy();
    res.send("logout success!");
  });



        // Get content endpoint
router.get('/content', auth, function (req, res) {
    res.send("You can  see beacause  you've logged in.");
});



module.exports = router;