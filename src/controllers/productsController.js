const express = require("express");
const fs = require('fs');
const path = require ('path');

let db = require("../database/models")

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
  // ====== RENDER FOR SHOPPING CART   ======
  shoppingCart: (req, res) => {
    res.render("products/carrito-compras");
  },

  // ====== RENDER FOR SIMPLE PRODUCT DETAIL   ======
  detalle: (req, res) => {


    // se agrega la consulta por primary key con sequalize a la base de datos
    db.Productos.findByPk(req.params.id)
    .then(function(product){
      res.render("products/detalle-producto",{product})
    })    

    // let id= req.params.productId;
    // let product = products.find((product) => product.id == id);
    // res.render('products/detalle-producto', {product})

  },

  // ====== RENDER FOR LIST PAGE   ======
  list: (req, res) => {

    // se agrega la consulta para todos los productos
    // con sequalize a la base de datos

    db.Productos.findAll()
    .then(function(products){
      res.render("products/listado-productos",{products:products})
    })
    .catch ((err) => {
      console.log (err)
    })
        // res.render("products/listado-productos", {products});
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
    let image 

    if(req.files[0] != undefined) {
      image = req.files[0].filename
    } else {
      image = productToEdit.image;
    }

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

  delete: (req, res) => {

    
    let id = req.params.id;
    
    let productToDelete = products.filter(product => product.id != id);

    console.log(productToDelete);

    fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete, null, ' '));
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