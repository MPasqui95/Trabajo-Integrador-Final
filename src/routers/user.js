const express = require ("express");
const routerUser = express.Router();
const path = require("path");

const userController = require ("../controllers/userController");


routerUser.get ("/register", userController.register);
routerUser.get ("/login", userController.login);

module.exports = routerUser;
