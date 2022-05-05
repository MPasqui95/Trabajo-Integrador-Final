const express = require("express");
const path = require("path");


const mainController = {
    index: function (req,res) {
        res.render(path.resolve(__dirname, "../views/products/index.ejs"));
    }

    
}

module.exports = mainController;