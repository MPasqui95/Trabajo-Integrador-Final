const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const userController = {
  register: (req, res) => {
    return res.render("users/register");
  },

  // ===  STORE USER ===============
  store: (req, res) => {
    let errors = validationResult(req);

    let image;

    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default-image.jpg";
    }

    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      confirm_password: bcryptjs.hashSync(req.body.confirm_password, 10),
      image: image,
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    res.redirect("/");
  },

  // ============================================================
  // ==================== LOGIN PROCESS ===========================

  login: (req, res) => {
    return res.render("users/login");
  },

  loginProcess: (req, res) => {
    let errors = validationResult(req);

    // return res.send(errores);
    let userEmail = req.body.mail;
    
    //find user
    let userToLogin = users.find((oneUser) => oneUser.email === userEmail);
    //if the user exist compare the password
    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      //if the password is correct, delete and save the user in session
      if (isOkThePassword) {
        delete userToLogin.password;  // Se comenta por que se cree hay un error con las COOKIes 
        req.session.userLogged = userToLogin;

        // //if the user select the remember check, them set the cookie
        if (req.body.rememberUser != undefined) {
          
          res.cookie("userEmail", userToLogin.email, { maxAge: 120000 });
          return res.redirect("/user/profile");
        }

        //if the user don´t select the remember check, redirect
      
      }

      //if the password is incorrect
      return res.render("users/login", {
        errors: {
          msg: "Contraseña invalida, vuelve a intentarlo",
          oldData: req.body.mail,
        },
      });
    }

  //if the user don´t exist
    return res.render("users/login", {
      errors: {
        email: "No  se encuentra un usuario con ese correo o contraseña",
      },
    });
  
  },

  // ============================================================
  // ==================== PROFILE ===============================

  profile: (req, res) => {
    // console.log(req.session)
    res.render('users/profile', { user: req.session.userLogged });

  },

  // ============================================================
  // ==================== LOGOUT ===========================

  logout: (req, res) => {
    res.clearCookie("userEmail")
    req.session.destroy();
    return res.redirect('/')

  },
};

module.exports = userController;
