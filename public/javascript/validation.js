window.addEventListener("load", function () {
  //get product form
  let productCreateForm = document.querySelector("form.product-create-form");

  //get login form
  let loginForm = document.getElementById("login-form-validation");

  //product create validation

  if (productCreateForm != null) {
    productCreateForm.addEventListener("submit", (e) => {
      // name fields
      let productName = document.querySelector("input.product-name");
      let textName = document.querySelector(".input-product-name-error");

      // description fields
      let productDescription = document.querySelector(
        "textarea.product-description"
      );
      let textDescription = document.querySelector(
        ".input-product-description-error"
      );

// ===========================NAME FIELD VALIDATION===================================
      // if product name is empty
      if (productName.value == "") {
        e.preventDefault();
        // product name
        textName.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Este campo no puede estar vacío";
        productName.classList.add("input-error");

        // if product name is less than 5 characters
      } else if (productName.value.length < 5) {
        e.preventDefault();
        textName.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Este campo debe tener mínimo 5 caracteres";
        productName.classList.add("input-error");
      } else {
        //class remove for productName
        productName.classList.remove("input-error");
        textName.innerHTML = "";
      }

 // ==================PRODUCT DESCRIPTION VALIDATION============================
      // if product description is empty
      if (productDescription.value == "") {
        e.preventDefault();
        textDescription.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Este campo no puede estar vacío";
        productDescription.classList.add("input-error");

        // if product description is less than 20 characters
      } else if (productDescription.value.length < 20) {
        e.preventDefault();
        textDescription.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Este campo debe tener mínimo 20 caracteres";
        productDescription.classList.add("input-error");

        //if file extension validation is different to jpg, png jpeg
      }

      //if all fields meet criteria
      else {
        //class remove for productDescription
        productDescription.classList.remove("input-error");
        textDescription.innerHTML = "";
      }


// ======================= PRODUCT IMAGE ===========================
      //image fields
      let productImage = document.getElementById("imagenProducto");

      console.log(productImage);

      if (productImage.files[0]) {
        let productImageValue = productImage.files[0].name.split(".");
        let imageExtension = productImageValue[1].toLowerCase();
        let textImage = document.querySelector(".input-product-image-error");

        if (
          imageExtension == "png" ||
          imageExtension == "jpg" ||
          imageExtension == "jpeg"
        ) {
          productImage.classList.remove("input-error");
          textImage.innerHTML = "";
        } else {
          e.preventDefault();
          textImage.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " La imagen debe ser con extensión jpg, png o jpeg";
          productImage.classList.add("input-error");
        }
      } else {
        let textImage = document.querySelector(".input-product-image-error");
        e.preventDefault();
        textImage.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Debes adjuntar una imagen";
        productImage.classList.add("input-error");
        console.log("no hay archivo");
      }

// =============================================================
      return
    });
  }

  //LOGIN FORM VALIDACION
  if (loginForm != null) {
    let userEmail = document.querySelector("#input-mail-login");
    let textEmail = document.querySelector(".input-login-email-error");

    loginForm.addEventListener("submit", (e) => {
      if (userEmail.value == "") {
        e.preventDefault();
        console.log(textEmail);

        textEmail.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Este campo no puede estar vacío";
        userEmail.classList.add("input-error");
      }
    });
  }



  // ================== REGISTER FORM ======================

  let registerForm = document.getElementById("register-form-validation");
  if (registerForm != null) {
    registerForm.addEventListener("submit", function (e) {
      
  //IMAGE
  let imageRegisterValidation = document.getElementById("image-register-validation");
  //let imageError = [];

  if (imageRegisterValidation.files[0]) {
    let productImageValue = imageRegisterValidation.files[0].name.split(".");
    let imageExtension = productImageValue[1].toLowerCase();
    // let textImage = document.querySelector(".div-image-errors");
    // console.log(textImage);
    if (
      imageExtension == "png" ||
      imageExtension == "jpg" ||
      imageExtension == "jpeg" ||
      imageExtension == "gif"
    ) {
      console.log("entro al if");
      // imageRegisterValidation.classList.remove("input-error");
      // textImage.innerHTML = "";
    } else {
      e.preventDefault();
      console.log("estoy en el else");
      // textImage.innerHTML =
      //   "<i class=fas fa-exclamation-circle></i>" +
      //   " La imagen debe ser con extensión jpg, png, jpeg o gif";
      // imageRegisterValidation.classList.add("input-error");
    }
  } else {
    e.preventDefault()
    console.log("no hay archivo");
    /*let textImage = document.querySelector(".div-image-errors");
    e.preventDefault();
    textImage.innerHTML =
      '<i class="fas fa-exclamation-circle"></i>' +
      " Debes adjuntar una imagen";
      imageRegisterValidation.classList.add("input-error");*/
  }




      });
    }

  

});
