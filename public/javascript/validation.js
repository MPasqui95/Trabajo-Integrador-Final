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
 // ======================= LOGIN PASSWORD ===========================
    loginForm.addEventListener("submit", (e) => {
      if (userPassword.value == "") {
        e.preventDefault();
        console.log(textPassword);
        textPassword.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " El campo contraseña no puede estar vacio";
        userPassword.classList.add("input-error");
      }else if (userPassword.value.length < 4) {
        e.preventDefault();
        console.log(textPassword);
        textPassword.innerHTML =
          '<i class="fas fa-exclamation-circle"></i>' +
          " El campo contraseña debe contener al menos 4 caracteres ";
        userPassword.classList.add("input-error");
      }
    });
  }

// =============================================================
  //REGISTER FORM VALIDATION

  //get register form
  let registerForm = document.getElementById("register-form-validation");
  
  if (registerForm != null) {
    
  registerForm.addEventListener('submit', function(e) {

  e.preventDefault();

  //NAME

  let nameRegisterValidation = document.getElementById("name-register-validation")
 
  // let nameError = [];

  let ulNameErrores = document.querySelector("div.div-name-errors");

  if (nameRegisterValidation.value == ''){
    // nameError.push('Campo Obligatorio')
    ulNameErrores.innerHTML += '<i class="fas fa-exclamation-circle"></i> ' + ' Campo Obligatorio'

  } else if(nameRegisterValidation.value.length < 2){
    // nameError.push('Debe tener al menos 2 caracteres')
    ulNameErrores.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debe tener al menos 2 caracteres'
  }

  /* if (nameError.length > 0){
    e.preventDefault();
    let ulNameErrores = document.querySelector("div.div-name-errors ul");
    for (let i=0; i < nameError.length; i++){
      ulNameErrores.innerHTML += "<li>" + '<i class="fas fa-exclamation-circle"></i> '+  nameError[i] + "</li>"
    }

  }*/

  //LAST NAME

  let lastNameRegisterValidation = document.getElementById("lastname-register-validation")

  // let lastNameError = [];

  let ulLastNameErrores = document.querySelector("div.div-lastname-errors");

  if (lastNameRegisterValidation.value == ''){
    //lastNameError.push('Campo Obligatorio')
    ulLastNameErrores.innerHTML += '<i class="fas fa-exclamation-circle"></i> ' + ' Campo Obligatorio'

  } else if(lastNameRegisterValidation.value.length < 2){
    //lastNameError.push('Debe tener al menos 2 caracteres');
    ulLastNameErrores.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + ' Debe tener al menos 2 caracteres'
    }
  

  /*if (lastNameError.length > 0){
    e.preventDefault();
    //let ulLastNameErrores = document.querySelector("div.div-lastname-errors ul");
    for (let i=0; i < lastNameError.length; i++){
      ulLastNameErrores.innerHTML += "<li>" + '<i class="fas fa-exclamation-circle"></i> '+  lastNameError[i] + "</li>"
    }
    
  } */

  //EMAIL

  let emailRegisterValidation = document.getElementById("email-register-validation")

  let emailError = [];

  if (emailRegisterValidation.value == ''){
    emailError.push('Campo Obligatorio')
  } 

  if(!emailRegisterValidation.value.includes("@")){
    console.log("no incluye")
    emailError.push("La dirección de email incorrecta");
  } else if(registerForm == null){
    console.log("soy null")
  }
  else  {
    //emailError.push("La dirección de incorrecta")
    console.log("else")
  }

  if (emailError.length > 0){
    e.preventDefault();
    let ulEmailErrores = document.querySelector("div.div-email-errors ul");
    for (let i=0; i < emailError.length; i++){
      ulEmailErrores.innerHTML += "<li>" + '<i class="fas fa-exclamation-circle"></i> '+  emailError[i] + "</li>"
    }

  }

  //PASSWORD

  let passwordRegisterValidation = document.getElementById("password-register-validation")

  let passwordError = [];

  if (passwordRegisterValidation.value == ''){
    passwordError.push('Campo Obligatorio')

  } else if(passwordRegisterValidation.value.length < 8){
    passwordError.push('Debe tener al menos 8 caracteres')
  }

  if (passwordError.length > 0){
    e.preventDefault();
    let ulPasswordErrores = document.querySelector("div.div-password-errors ul");
    for (let i=0; i < ulPasswordErrores.length; i++){
      ulPasswordErrores.innerHTML += "<li>" + '<i class="fas fa-exclamation-circle"></i> '+ passwordError[i] + "</li>"
    }

  }

  //IMAGE

  let imageRegisterValidation = document.getElementById("image-register-validation")

if(imageRegisterValidation.files[0] == undefined){
 
}
  if (imageRegisterValidation.files[0]) {
   
    let productImageValue = imageRegisterValidation.files[0].name.split(".");
   
    let imageExtension = productImageValue[1].toLowerCase();
    let textImage = document.querySelector(".div-image-errors");
    console.log(textImage);
    if (
      imageExtension == "png" ||
      imageExtension == "jpg" ||
      imageExtension == "jpeg"||
      imageExtension == "gif"
    ) {
  
      imageRegisterValidation.classList.remove("input-error");
     textImage.innerHTML = "";
    } else {
      e.preventDefault();

       textImage.innerHTML =
        "<i class=fas fa-exclamation-circle></i>" +
        " La imagen debe ser con extensión jpg, png, jpeg o gif";
        imageRegisterValidation.classList.add("input-error");
    }
  } 
  else {
    e.preventDefault();

    let textImage = document.querySelector(".div-image-errors");
    
    e.preventDefault();
    textImage.innerHTML =
      '<i class="fas fa-exclamation-circle"></i>' +
      " Debes adjuntar una imagen";
      imageRegisterValidation.classList.add("input-error");
    
  }


})
  }
});


