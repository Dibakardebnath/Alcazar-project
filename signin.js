var signinForm = document.querySelector("#signin-form");
var emailInput = document.querySelector("#email");
var emailLabel = document.querySelector('label[for="email"]');
var passwordInput = document.querySelector("#password");
var passwordLabel = document.querySelector('label[for="password"]');
var forgotPasswordLink = document.querySelector("#forgot-password");
var createAccountLink = document.querySelector("#create-account");

emailInput.addEventListener('focus', function(){
    emailLabel.style.display = 'inline';
    this.placeholder = '';
});

emailInput.addEventListener('blur', function(){
    if(!this.value){
        emailLabel.style.display = 'none';
        this.placeholder = 'EMAIL ADDRESS*';
    }
});

passwordInput.addEventListener('focus', function(){
    passwordLabel.style.display = 'inline';
    this.placeholder = '';
});

passwordInput.addEventListener('blur', function(){
    if(!this.value){
        passwordLabel.style.display = 'none';
        this.placeholder = 'PASSWORD';
    }
});

signinForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(validateForm()) {
        var email = emailInput.value;
        var password = passwordInput.value;
        var user = JSON.parse(localStorage.getItem("accounts")) || [];
        var count = 0;
        user.forEach(function(elem){
            if(email == elem.email && password == elem.password){ // Changed 'phone' to 'email' as email is the correct field name for email input
                count++;
            }
        });
        if(count > 0){
            window.location.href = "index.html";
        }
        else{
            alert("Wrong email or password");
        }
    }
});

function validateForm() {
    var email = emailInput.value;
    var password = passwordInput.value;
    if (email.trim() === "" || password.trim() === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}

