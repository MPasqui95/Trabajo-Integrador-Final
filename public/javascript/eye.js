let eye = document.querySelector('.eye-icon');
let input = document.getElementById('input-login-password');
let registerInput = document.getElementById('password-register-validation');
let confirmRegisterInput = document.getElementById('confirm-password-register-validation');

// LOGIN EYE
eye.addEventListener('click', function(){
    if(input.type == "password"){
        input.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        input.type = "password"
        eye.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    }
});

// REGISTER EYE
eye.addEventListener('click', function(){
    if(registerInput.type == "password"){
        registerInput.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        registerInput.type = "password"
        eye.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    }
});

// CONFIRM REGISTER EYE
eye.addEventListener('click', function(){
    if(confirmRegisterInput.type == "password"){
        confirmRegisterInput.type = "text"
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else{
        confirmRegisterInput.type = "password"
        eye.innerHTML= '<i class="fa-solid fa-eye-slash" id="close-eye"></i>'
    }
});