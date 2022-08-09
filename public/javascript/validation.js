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

      }

      //if all fields meet criteria
      else {
        //class remove for productDescription
        productDescription.classList.remove("input-error");
        textDescription.innerHTML = "";
      }


// ======================= PRODUCT IMAGE VALIDATION ===========================
      //image fields
      let productImage = document.getElementById("imagenProducto");

      if (productImage.files[0]) {
        let productImageValue = productImage.files[0].name.split(".");
        let imageExtension = productImageValue[1].toLowerCase();
        let textImage = document.querySelector(".input-product-image-error");

        if (
          imageExtension == "png" ||
          imageExtension == "jpg" ||
          imageExtension == "jpeg"||
          imageExtension == "gif"
        ) {
          productImage.classList.remove("input-error");
          textImage.innerHTML = "";
        } else {
          e.preventDefault();
          textImage.innerHTML =
            '<i class="fas fa-exclamation-circle"></i>' +
            " La imagen debe ser con extensión jpg, png, jpeg o gif";
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
      return
    });
  }
  //=========================LOGIN FORM VALIDACION=============================

  //===============================LOGIN EMAIL=================================
  if (loginForm != null) {

    let userEmail = document.querySelector("#input-mail-login");
    let textEmail = document.querySelector(".input-login-email-error");
    let textTypeEmail = document.querySelector(".input-login-email-type-error");

    let userPassword = document.getElementById('input-login-password')
    let textPassword = document.querySelector(".input-login-password-error");
    let textPasswordCharacter = document.querySelector(".input-login-password-character-error");



    loginForm.addEventListener("submit", (e) => {

      //empty email validation
      if (userEmail.value == "") {
        e.preventDefault();
        textEmail.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " Este campo no puede estar vacío";
        userEmail.classList.add("input-error");

      } 
      else {
        textEmail.innerHTML = ""
        userEmail.classList.remove("input-error");
      }

      //valid email validation - must contain @
      if (userEmail.value != "" && !userEmail.value.includes("@")) {
        e.preventDefault();
        textTypeEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i>' + " Debes ingresar un formato de mail valido";
        userEmail.classList.add("input-error");
      }

      else {
        textTypeEmail.innerHTML = ""
        userEmail.classList.remove("input-error");
      }
  
  
      // ================ LOGIN PASSWORD VALIDATION=========================
       
      if (userPassword.value == "") {
        e.preventDefault();
        textPassword.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " El campo contraseña no puede estar vacio";
        userPassword.classList.add("input-error");

      } 
      else {
        textPassword.innerHTML = ""
        userPassword.classList.remove("input-error");
      }

      if (userPassword.value.length > 0 && userPassword.value.length < 4) {
        e.preventDefault();
        textPasswordCharacter.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " El campo debe tener mínimo 4 caracteres";
        userPassword.classList.add("input-error");
      } 
      else {
        textPasswordCharacter.innerHTML = ""
        userPassword.classList.remove("input-error");
      }

    });
  }


  //============================REGISTER FORM VALIDATION=======================

  //get register form
  let userRegisterForm = document.getElementById("register-form-validation");
  
  if (userRegisterForm != null) {
    
    userRegisterForm.addEventListener('submit', (e) => {

      // e.preventDefault()
    //===============================REGISTER NAME====================================

      let userRegisterName = document.getElementById("name-register-validation")//input
      let textUserRegisterName = document.querySelector('.div-name-errors')//error message
      let textUserRegisterCharacteres = document.querySelector('.div-name-characteres-errors')//error message


      if (userRegisterName.value == ''){
        e.preventDefault()
        textUserRegisterName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar tu nombre'
        userRegisterName.classList.add("input-error");

      } else {
        textUserRegisterName.innerHTML = ""
        userRegisterName.classList.remove("input-error");
      }

      if (userRegisterName.value != "" && userRegisterName.value.length < 2) {
        e.preventDefault()
        textUserRegisterCharacteres.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' El nombre debe contener mínimo 4 letras'
        userRegisterName.classList.add("input-error-2");

      } else {
        textUserRegisterCharacteres.innerHTML = ""
        userRegisterName.classList.remove("input-error-2");
      }

  // ===================REGISTER LAST NAME======================================

      let userRegisterLastName = document.getElementById("lastname-register-validation")//input
      let textRegisterLastName = document.querySelector('.div-lastName-errors')//class
      let textRegisterLastNameCharacters = document.querySelector('.div-lastName-characteres-errors')//class

      if (userRegisterLastName.value == '') {
        e.preventDefault()
        textRegisterLastName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar tu apellido'
        userRegisterLastName.classList.add("input-error");

      } else {
        textRegisterLastName.innerHTML = ''
        userRegisterLastName.classList.remove("input-error");
      }

      if (userRegisterLastName.value.length > 0 && userRegisterLastName.value.length < 2) {
        e.preventDefault()
        textRegisterLastNameCharacters.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' El apellido debe contener mínimo 4 letras'
        userRegisterLastName.classList.add("input-error-2");

      } else {
        textRegisterLastNameCharacters.innerHTML = ''
        userRegisterLastName.classList.remove("input-error-2");
      }

  //==============================REGISTER EMAIL==========================================

      let userRegisterEmail = document.getElementById("email-register-validation")//input
      let textUserRegisterEmail = document.querySelector(".div-email-errors")//class
      let textUserRegisterEmailCharacter = document.querySelector(".div-email-character-errors")//class

      if (userRegisterEmail.value == '') {
        e.preventDefault()
        textUserRegisterEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar un correo electrónico'
        userRegisterEmail.classList.add("input-error");
        
      } else {
        textUserRegisterEmail.innerHTML = ""
        userRegisterEmail.classList.remove("input-error");
      }

      if (userRegisterEmail.value != "" && !userRegisterEmail.value.includes("@")) {
        e.preventDefault()
        textUserRegisterEmailCharacter.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar un correo electrónico valido'
        userRegisterEmail.classList.add("input-error-2");

      } else {
        textUserRegisterEmailCharacter.innerHTML = ""
        userRegisterEmail.classList.remove("input-error-2");
      }



  //================================REGISTER PASSWORD====================================

      let userRegisterPassword = document.getElementById("password-register-validation")//input
      let textUserRegisterPassword = document.querySelector('.div-password-errors')//class
      let textUserRegisterPasswordCharacter = document.querySelector('.div-password-character-errors')//class

      if (userRegisterPassword.value == "") {
        e.preventDefault()
        textUserRegisterPassword.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes ingresar una contraseña'
        userRegisterPassword.classList.add("input-error");

      } else {
        textUserRegisterPassword.innerHTML = ""
        userRegisterPassword.classList.remove("input-error");
      }

      if (userRegisterPassword.value != "" && userRegisterPassword.value.length < 8) {
        e.preventDefault()
        textUserRegisterPasswordCharacter.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' La contraseña debe tener mínimo 8 caracteres'
        userRegisterPassword.classList.add("input-error-2");

      } else {
        textUserRegisterPasswordCharacter.innerHTML = ""
        userRegisterPassword.classList.remove("input-error-2");
      }

  //==============================REGISTER IMAGE====================================

      let userRegisterImage = document.getElementById("image-register-validation")//input
      let textUserRegisterImage = document.querySelector('.div-image-errors')

      if(userRegisterImage.files[0]){
        let userImageValue = userRegisterImage.files[0].name.split('.')
        let userImageExtension = userImageValue[1].toLowerCase()

        if(
          userImageExtension == "png" ||
          userImageExtension == "jpg" ||
          userImageExtension == "jpeg" ||
          userImageExtension == "gif"
        ) {
          textUserRegisterImage.innerHTML = ""
          userRegisterImage.classList.remove('input-error')

        } else {
          e.preventDefault()
          textUserRegisterImage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' La imagen debe ser con extensión jpg, png, jpeg o gif'
          userRegisterImage.classList.add('input-error')
        }
        
      } else {
        e.preventDefault()
        textUserRegisterImage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debes adjuntar una imagen'
        userRegisterImage.classList.add('input-error')
      }

      return

})
  }
});



