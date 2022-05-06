const express = require("express");




const productsController = {
    carrito:  (req,res) => {
        return res.render("products/carrito-compras");
    },

    detalle:  (req,res) => {
        return res.render("products/detalle-producto");
    },

    listado:  (req,res) => {
        return res.render("products/listado-productos");
    },

    crear:  (req,res) => {
        return res.render("products/crear-productos");
    },

    editar:  (req,res) => {
        return res.render("products/editar-productos");
    },
}

module.exports = productsController;