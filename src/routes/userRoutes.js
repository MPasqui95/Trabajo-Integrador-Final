const express = require ("express");
const multer = require("multer");
const routerUser = express.Router();
const path = require("path");
const { body } = require('express-validator');


const userController = require ("../controllers/userController");
const userLoggedMiddleware = require("../middleware/userLoggedMiddleware");
const isLoggedMiddleware =  require("../middleware/isLoggedMiddleware");
const authMiddleware =  require("../middleware/authMiddleware");


// =========== MULTER =============
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        const newFilename = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
});

const uploadFile = multer({storage});



// ==== CREATE USERS WITH EXPRESS VALIDATOR ========
routerUser.get('/register', isLoggedMiddleware , userController.register);

let validations = [
    body('nombres').notEmpty().withMessage('Debes ingresar el nombre'),
    body('apellido').notEmpty().withMessage('Debes ingresar el apellido'),
    body('email').isEmail().withMessage('Debes ingresar un email valido'),
    body('password').isEmpty().isLength({min: 5}).withMessage('El password debe ser mínimo de 5 caracteres'),
    body('confirm_password').isEmpty().isLength({min: 5}).withMessage('El password debe ser mínimo de 5 caracteres')
];

routerUser.post('/register', validations, uploadFile.any('user-image'), userController.store);

// ===== LOGIN =============
routerUser.get("/login", isLoggedMiddleware , userController.login);
routerUser.post("/login", uploadFile.any('user-image'), userController.loginProcess);

// ====== PROFILE ======= 
routerUser.get('/profile', authMiddleware, userLoggedMiddleware, userController.profile); // se agrego otro Middleware si no esta logueado lo redirige al login

// ====== LOGOUT ======= 
routerUser.get('/logout/', userController.logout);


module.exports = routerUser;
