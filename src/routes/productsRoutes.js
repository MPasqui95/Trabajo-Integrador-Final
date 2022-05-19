const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require ('path');
// ==== EXPRESS VALIDATOR =====
// const { body } = require ('express-validator');


const productsController = require("../controllers/productsController");

// =========== MULTER =============
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/productos')
    },
    filename: (req, file, cb) => {
        const newFilename = 'product' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
});

const uploadFile = multer({storage});

//=================== VALIDATIONS ==================================
// const validateCreateProduct = [
//     body('brand').notEmpty().withMessage('Debes completar este campo')
// ]

//================= ROUTES ================================

//================ SHOPPING CART ==========================
router.get("/carrito-compras", productsController.shoppingCart);

//================== PRODUCT DETAIL ======================
// router.get("/detalle-producto", productsController.detalle);

//============== PRODUCTS LIST =============================
router.get("/listado-productos", productsController.list);

//============= PRODUCT CREATE ==============================
router.get('/crear-productos', productsController.create);
router.post('/crear-productos', uploadFile.any('image'), productsController.store)

//==================== PRODUCT EDIT =========================
router.get('/editar-productos/:id', productsController.edit);
router.put('/editar-productos/:id', uploadFile.any('image'), productsController.update);

//====== PRODUCT DELETE =============================
router.delete('/editar-productos/:id', productsController.delete)

;

module.exports = router;
