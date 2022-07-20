window.addEventListener("load", function () {
  //product create validation
  let productCreateForm = document.querySelector("form.product-create-form");

  productCreateForm.addEventListener("submit", (e) => {
    // name fields
    let productName = document.querySelector("input.product-name");
    let textName = document.querySelector(".input-product-name-error");

    // description fields
    let productDescription = document.querySelector("textarea.product-description");
    let textDescription = document.querySelector(".input-product-description-error");

    // console.log(productName);
    // console.log(textName);
    // console.log(productDescription);
    // console.log(textDescription);

    // NAME FIELD VALIDATION
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

    // PRODUCT DESCRIPTION VALIDATION
    // if product description is empty
    if (productDescription.value == "") {
      e.preventDefault();
      textDescription.innerHTML =
        '<i class="fas fa-exclamation-circle"></i>' +
        " Este campo no puede estar vacío";
      productDescription.classList.add("input-error");

      // if product description is less than 20 characters
    } else if (productDescription.value.length < 5) {
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


    //final fields validations to submit the form
    if(productName.value != "" && productName.value.length >= 5 && productDescription.value != "" && productDescription.value.length >= 5) {

        console.log('All its OK');
        return

    } else {
        e.preventDefault();
    }
     
  });
});
