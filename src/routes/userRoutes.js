const express = require("express");
const multer = require("multer");
const routerUser = express.Router();
const path = require("path");
const { body } = require("express-validator");

const userController = require("../controllers/userController");
const userLoggedMiddleware = require("../middleware/userLoggedMiddleware");
const isLoggedMiddleware = require("../middleware/isLoggedMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

// =========== MULTER =============
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/users");
  },
  filename: (req, file, cb) => {
    const newFilename = "user" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

const uploadFile = multer({ storage });

// ==== CREATE USERS WITH EXPRESS VALIDATOR ========
routerUser.get("/register", isLoggedMiddleware, userController.register);

let validations = [
  body("name").notEmpty().withMessage("Debes ingresar el nombre"),

  body("lastName").notEmpty().withMessage("Debes ingresar el apellido"),

  body("email").notEmpty().withMessage("Debes ingresar un email valido"),

  body("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .isLength({ min: 2 })
    .withMessage("El password debe ser mínimo de 3 caracteres"),

  body("confirm_password")
    .notEmpty()
    .withMessage("Debes ingresar la confirmacion de la contraseña")
    .isLength({ min: 3 })
    .withMessage("El password debe ser mínimo de 3 caracteres"),

  body("boundariesCheck").exists().withMessage('Debes seleccionar el recuadro de tratamiento de datos personales')
];

//======= USER REGISTER =========== OK

routerUser.post("/register", uploadFile.any("user-image"), validations, userController.storeUser);

//======== USER EDIT ========= OK
routerUser.get("/editar-usuario/:id", userController.editUsers);
routerUser.put("/editar-usuario/:id", uploadFile.any("user-image"), userController.updateUser);

//======== USER LIST ========= OK
routerUser.get("/users", userController.listUsers);

//====== USER DELETE ============
routerUser.post("/borrar/:id", userController.deleteUser);

// ===== LOGIN =============
routerUser.get("/login", isLoggedMiddleware, userController.login);
routerUser.post("/login", uploadFile.any("user-image"), userController.loginProcess);


// ====== PROFILE =======
routerUser.get("/profile", authMiddleware, userLoggedMiddleware, userController.profile); 

// ====== LOGOUT =======
routerUser.get("/logout", userController.logout);

module.exports = routerUser;
