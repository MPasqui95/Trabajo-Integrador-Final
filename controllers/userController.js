const express = require("express");


const userController = {

    register:  (req,res) => {
        return res.render("users/register");
    },

    login:  (req,res) => {
        return res.render("users/login");
    }
}

module.exports = userController;