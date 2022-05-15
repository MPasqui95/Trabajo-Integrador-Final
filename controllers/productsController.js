const express = require("express");

const productsController = {
  // ====== RENDER FOR SHOPPING CART   ======
  carrito: (req, res) => {
    res.render("products/carrito-compras");
  },

  // ====== RENDER FOR SIMPLE PRODUCT DETAIL   ======
  detalle: (req, res) => {
    res.render("products/detalle-producto");
  },

  // ====== RENDER FOR LIST PAGE   ======
  listado: (req, res) => {
    res.render("products/listado-productos");
  },

  // ====== RENDER FOR PRODUCT CREATE PAGE   ======
  crear: (req, res) => {
    res.render("products/crear-productos");
  },

  // ====== RENDER FOR EDIT PAGE   ======
  editar: (req, res) => {
    res.render("products/editar-productos");
  },

  // ====== RENDER FOR PRODUCT DETAIL   ======
  detalles: (req, res) => {
    let detailOfProducts = arrayProductDetail.find(
      (detail) => detail.id == req.params.productId
    );
    console.log(detailOfProducts);
    res.render("products/product-detail", {
      detail: detailOfProducts,
    });
  },
};

// ==== PRODUCTS DETAILS ARRAY =========

const arrayProductDetail = [
  {
    // ======= PRODUCT 01 ======
    id: 1,
    route: "Inicio > Laptops > Lenovo",
    brand: "Lenovo",
    productName: "Portatil Thinkpad",
    offerPrice: "US$ 1499",
    regularPrice: "US$ 2000",
    colores: "Colores disponibles",
    img: "producto1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut tellus facilisi sit viverra consequat at. Sagittis fringilla mattis non at auctor curabitur vitae tempor tincidunt. Sapien integer non semper a facilisis cursus ac pulvinar dolor. Non, suspendisse in risus sed diam.",
    specification: "Especificaciones",
  },

  // ======= PRODUCT 02 ======
  {
    id: 2,
    route: "Inicio > Laptops > Asus",
    brand: "Asus",
    productName: "Portatil Rog Matrix",
    offerPrice: "US$ 1399",
    regularPrice: "US$ 1800",
    img: "producto2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut tellus facilisi sit viverra consequat at. Sagittis fringilla mattis non at auctor curabitur vitae tempor tincidunt. Sapien integer non semper a facilisis cursus ac pulvinar dolor. Non, suspendisse in risus sed diam.",
    specification: "Especificaciones",
  },

  {
    // ======= PRODUCT 03 ======
    id: 3,
    route: "Inicio > Gamers > Nintendo",
    brand: "Nintendo",
    productName: "Nintendo Switch",
    offerPrice: "US$ 699",
    regularPrice: "US$ 999",
    img: "producto3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut tellus facilisi sit viverra consequat at. Sagittis fringilla mattis non at auctor curabitur vitae tempor tincidunt. Sapien integer non semper a facilisis cursus ac pulvinar dolor. Non, suspendisse in risus sed diam.",
    specification: "Especificaciones",
  },

  // ======= PRODUCT 04 ======
  {
    id: 4,
    route: "Inicio > Audio > Sony",
    brand: "Sony",
    productName: "Audifonos Sony WF-1000XM4",
    offerPrice: "US$ 299",
    regularPrice: "US$ 400",
    img: "producto4.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut tellus facilisi sit viverra consequat at. Sagittis fringilla mattis non at auctor curabitur vitae tempor tincidunt. Sapien integer non semper a facilisis cursus ac pulvinar dolor. Non, suspendisse in risus sed diam.",
    specification: "Especificaciones",
  },

  // ======= PRODUCT 05 ======
  {
    id: 5,
    route: "Inicio > Celulares > Xiaomi",
    brand: "Xiaomi",
    productName: "Celular Redmi Note 11",
    offerPrice: "US$ 399",
    regularPrice: "US$ 500",
    img: "producto5.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut tellus facilisi sit viverra consequat at. Sagittis fringilla mattis non at auctor curabitur vitae tempor tincidunt. Sapien integer non semper a facilisis cursus ac pulvinar dolor. Non, suspendisse in risus sed diam.",
    specification: "Especificaciones",
  },
];

module.exports = productsController;