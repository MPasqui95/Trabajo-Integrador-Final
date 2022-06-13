const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  if (req.cookies.userEmail != undefined) {

    let emailCookie = req.cookies.userEmail;

    // find user
    let userFromCookie = users.find((oneUser) => oneUser.email === emailCookie);

    // if user in on cookie, set session
    if (userFromCookie) {
      req.session.userLogged = userFromCookie;
    }
  }

  
  if (req.session.userLogged){ // Se saco del if interno por que no era necesario según el video
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;
