const express = require("express");
const req = require("express/lib/request");
const fs = require('fs');
const path = require ('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {

register: (req, res) => {
  return res.render("users/register");
},

login: (req, res) => {
  return res.render("users/login");
},

// ===  CREATE USER ===============
create: (req, res) => {

  res.render('users/register')
  // console.log(users);
},

// ===  STORE USER ===============
store: (req, res) => {
     
  let image

  if(req.files[0] != undefined) {
    image = req.files[0].filename
  } else {
    image = 'default-image.jpg'
  }

  let newUser = {
    id: users[users.length - 1].id + 1,
    ...req.body,
    image: image
  };

  users.push(newUser)
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));

  res.redirect('/')
    

},
}

module.exports = userController;
