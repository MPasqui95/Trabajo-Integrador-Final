const express = require("express");
const path = require("path");


const productsController = {
    carrito: function (req,res) {
        res.render(path.resolve(__dirname, "../views/products/carrito-compras.ejs"));
    },

    detalle: function (req,res) {
        res.render(path.resolve(__dirname, "../views/products/detalle-producto.ejs"));
    },

    listado: function (req,res) {
        res.render(path.resolve(__dirname, "../views/products/listado-productos.ejs"));
    }
}

module.exports = productsController;