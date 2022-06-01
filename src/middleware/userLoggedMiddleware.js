const path = require("path");
const fs = require("fs");

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

function userLoggedMiddleware(req, res, next) {
  if (req.cookies.userEmail != undefined) {

    let emailCookie = req.cookies.userEmail;

    // find user
    let userFromCookie = users.find((oneUser) => oneUser.email === emailCookie);

    // if user in on cookie, set session
    if (userFromCookie) {
      req.session.userLogged = userFromCookie;
    }
  }

  next();
}

module.exports = userLoggedMiddleware;
