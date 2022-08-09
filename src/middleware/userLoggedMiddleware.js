//aplication middleware 

let db = require("../database/models");

function userLoggedMiddleware(req, res, next) {

  //set te locals variable named isLogged = false
  //res.locals are variables that I can share in all views
  res.locals.isLogged = false;
  res.locals.userAdmin = false;

  // let emailCookie = req.cookies.userMail;

  // if (emailCookie != undefined) {
  //   //find user
  //   db.Usuarios.findOne({
  //     where: {
  //       email: emailCookie,
  //     },
  //   })
  //     .then(function (usuario) {

  //       res.locals.isLogged = true;

  //     }
      
  //     )

  //     .catch(function (e) {
  //       console.log(e);
  //       return res.send(e);
  //     });

  // } 

    if (req.session.userLogged) {
      if (req.session.userLogged.userType == "Admin") {
        res.locals.userAdmin = true;
      }

      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
    }

    next();

  } 

module.exports = userLoggedMiddleware;
