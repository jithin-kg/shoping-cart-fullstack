// Authentication and Authorization Middleware
module.exports = function auth(req, res, next) {
    if (req.session && req.session.user )
      return next();
    else{
        // return res.sendStatus(401);
        // console.log(chalk.yellow("user not found"));
        res.redirect('/users/login')
    }
      
  };