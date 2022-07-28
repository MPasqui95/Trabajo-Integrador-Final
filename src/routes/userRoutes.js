const express = require("express");
const multer = require("multer");
const routerUser = express.Router();
const path = require("path");
const { body } = require("express-validator");

const userController = require("../controllers/userController");
const userLoggedMiddleware = require("../middleware/userLoggedMiddleware");
const isLoggedMiddleware = require("../middleware/isLoggedMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

let db = require("../database/models");

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

//Register User validations
let validations = [
  //name validation
  body("name")
    .notEmpty()
    .withMessage("Debes ingresar el nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe ser al menos de dos caracteres"),

  //last name validation
  body("lastName")
    .notEmpty()
    .withMessage("Debes ingresar el apellido")
    .isLength({ min: 2 })
    .withMessage("El nombre debe ser al menos de dos caracteres"),

  //email validation
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar un email valido")
    .isEmail()
    .withMessage("Debes ingresar un formato de email valido"),

  //password validation
  body("password")
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .isLength({ min: 2 })
    .withMessage("El password debe ser mínimo de 3 caracteres"),

  //image extension validation
  body("userImage").custom((value, { req }) => {
    let file = req.files[0];
    let acceptedExtensions = [".jpg", ".png", ".gif", "jpeg"];

    if (!file) {
      throw new Error("Tienes que subir una image");
    } else {
      let fileExtension = path.extname(file.originalname);

      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }
    return true;
  }),

  //confirm password validation
  body("confirm_password")
    .notEmpty()
    .withMessage("Debes ingresar la confirmacion de la contraseña")
    .isLength({ min: 3 })
    .withMessage("El password debe ser mínimo de 3 caracteres"),

  //validation if password confirmation matches password
  body("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("El password no coincide");
    } else {
      return true;
    }
  }),

  //validation if email exist
  body("email")
    .exists()
    .isEmail()
    .trim()
    .escape()
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        db.Usuarios.findOne({ where: { email: userEmail } })
        .then((emailExist) => {
            if (emailExist !== null) {
              reject(new Error("El email ya existe, prueba con otro"));
            } else {
              resolve(true);
            }
          }
        );
      });
    }),

  //boundarie validation
  body("boundariesCheck")
    .exists()
    .withMessage(
      "Debes seleccionar el recuadro de tratamiento de datos personales"
    ),
];

let userEditValidations = [
  
   //image extension validation
  body("userImage").custom((value, { req }) => {
    let file = req.files[0];
    let acceptedExtensions = [".jpg", ".png", ".gif", "jpeg"];

    if (!file) {
      throw new Error("Tienes que subir una image");
    } else {
      let fileExtension = path.extname(file.originalname);

      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),

    //email validation
    body("email")
    .notEmpty()
    .exists()
    .isEmail()
    .trim()
    .escape()
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        db.Usuarios.findOne({ where: { email: userEmail } }).then(
          (emailExist) => {
            if (emailExist !== null) {
              reject(new Error("El email ya existe, prueba con otro"));
            } else {
              resolve(true);
            }
          }
        );
      });
    })
]

// ===================== USER LOGIN VALIDATION ===============================
let userLoginValidations = [
  //email validation
  body("email")
    .notEmpty()
    .withMessage("Debes ingresar un email valido")
    .isEmail()
    .withMessage("Debes ingresar un formato de email valido"),

  // validation if the email exist
  body("email")
    .exists()
    .isEmail()
    .trim()
    .escape()
    .custom((userEmail) => {
      return new Promise((resolve, reject) => {
        db.Usuarios.findOne({ where: { email: userEmail } }).then(
          (emailExist) => {
            if (emailExist == null) {
              reject(new Error("El email no existe, intenta de nuevo"));
            } else {
              resolve(true);
            }
          }
        );
      });
    }),
  //confirm password validation
  body("password")
    .notEmpty()
    .withMessage("Debes ingresar la contraseña")
    .isLength({ min: 3 })
    .withMessage("El password debe ser mínimo de 3 caracteres"),
];

//======= USER REGISTER =========== OK

routerUser.post("/register", uploadFile.any("userImage"), validations, userController.storeUser);

//======== USER EDIT ========= OK
routerUser.get("/editar-usuario/:id", userController.editUsers);
routerUser.put("/editar-usuario/:id", uploadFile.any("userImage"),userController.updateUser);

//======== USER LIST ========= OK
routerUser.get("/users", userController.listUsers);

//====== USER DELETE ============
routerUser.post("/borrar/:id", userController.deleteUser);

// ===== LOGIN =============
routerUser.get("/login", isLoggedMiddleware, userController.login);
routerUser.post("/login", uploadFile.any("userImage"), userLoginValidations, userController.loginProcess);

// ====== PROFILE =======
routerUser.get("/profile", authMiddleware, userLoggedMiddleware, userController.profile);

// ====== LOGOUT =======
routerUser.get("/logout", userController.logout);

module.exports = routerUser;
