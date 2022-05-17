const express = require("express");
const req = require("express/lib/request");
const fs = require('fs');
const path = require ('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
  // ====== RENDER FOR SHOPPING CART   ======
  shoppingCart: (req, res) => {
    res.render("products/carrito-compras");
  },

  // ====== RENDER FOR SIMPLE PRODUCT DETAIL   ======
  detalle: (req, res) => {

    let id= req.params.productId;
    
    let product = products.find((product) => product.id == id);
    res.render('products/product-detail', {product})

  },

  // ====== RENDER FOR LIST PAGE   ======
  list: (req, res) => {
        res.render("products/listado-productos", {products});
  },

  // ====== RENDER FOR PRODUCT CREATE PAGE   ======
  create: (req, res) => {
    res.render("products/crear-productos");
  },

  // ======= CREATE - METHOD TO STORE ======
  store: (req, res) => {
    
    let image

    if(req.files[0] != undefined) {
      image = req.files[0].filename
    } else {
      image = 'default-image.jpg'
    }

    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      image: image
    };

    products.push(newProduct)
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

    res.redirect('/')

  },

  // ====== RENDER FOR EDIT PAGE   ======
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    res.render("products/editar-productos", { productToEdit });
  },


  //====== UPDATE PRODUCT ======================
  update: (req, res) => {
    let id = req.params.id;
    // console.log(id);
    let productToEdit = products.find(product => product.id == id);
    // console.log(productToEdit);
    let image = req.files[0].filename;

    // if(req.files[0].filename != undefined) {
    // image = req.files[0].filename
    // } else {
    //   image = 'default-image.jpg'
    // }

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: image
    }

    let newProducts = products.map(product => {
      if(product.id == productToEdit.id) {
        return product = {...productToEdit}
      }
      return product
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    res.redirect('/')
  },

  // ====== RENDER FOR PRODUCT DETAIL   ======
  detail: (req, res) => {
    let detailOfProducts = arrayProductDetail.find(
      (detail) => detail.id == req.params.productId
    );
    console.log(detailOfProducts);
    res.render("products/product-detail", {
      detail: detailOfProducts,
    });
  },
};

module.exports = productsController;