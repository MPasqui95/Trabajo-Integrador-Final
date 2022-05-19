const express = require ("express");
const multer = require("multer");
const routerUser = express.Router();
const path = require("path");


const userController = require ("../controllers/userController");

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

routerUser.get('/register', userController.create);
// ==== CREATE USERS ========
routerUser.post('/register', uploadFile.any('user-image'), userController.store);

// ===== LOGIN =============
routerUser.get("/login", userController.login);

module.exports = routerUser;
