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

//================== PRODUCT DETAIL ====================== OK
router.get("/detalle/:id", productsController.detail);

//============== PRODUCTS LIST ============================= OK
router.get("/listado-productos", productsController.list);

//============= PRODUCT CREATE ============================== OK
router.get('/crear-productos', productsController.create);
router.post('/crear-productos', uploadFile.any('image'), productsController.store)

//==================== PRODUCT EDIT ========================= OK
router.get('/editar-productos/:id', productsController.edit);
router.put('/editar-productos/:id', uploadFile.any('image'), productsController.update);

//====== PRODUCT DELETE =============================
router.delete('/editar-productos/:id', productsController.delete);

//================ PRODUCT FIND  ====================
router.post('/find', uploadFile.any('image'), productsController.find);

//============= PRODUCTS CATEGORIES  =================
router.get('/celulares', productsController.cels)
router.get('/laptops', productsController.laptop)
router.get('/tablets', productsController.tablet)
router.get('/gamer', productsController.game)
router.get('/audio', productsController.audio)
router.get('/accesorios', productsController.props)

module.exports = router;
