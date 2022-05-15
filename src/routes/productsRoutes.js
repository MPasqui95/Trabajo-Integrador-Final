const express = require("express");
const router = express.Router();
// const path = require("path");

const productsController = require("../controllers/productsController");

router.get("/carrito-compras", productsController.carrito);
router.get("/detalle-producto", productsController.detalle);
router.get("/listado-productos", productsController.listado);
router.get("/crear-productos", productsController.crear);
router.get("/editar-productos", productsController.editar);

// PRODUCTS ARRAYS
router.get("/detalle-producto/:productId?", productsController.detalles);

module.exports = router;
