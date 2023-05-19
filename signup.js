function saveAccount(event) {
    event.preventDefault();
  
    // Get form inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var pincode = document.getElementById("pincode").value;
    var password = document.getElementById("password").value;
  
    // Validate form inputs
    if (firstName.trim() === "") {
      alert("Please enter your first name.");
      return false;
    }
  
    if (lastName.trim() === "") {
      alert("Please enter your last name.");
      return false;
    }
  
    if (dob.trim() === "") {
      alert("Please enter your date of birth.");
      return false;
    }
  
    if (gender.trim() === "") {
      alert("Please select your gender.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (mobile.trim() === "") {
      alert("Please enter your mobile number.");
      return false;
    }
  
    if (pincode.trim() === "") {
      alert("Please enter your pin code.");
      return false;
    }
  
    if (password.trim() === "") {
      alert("Please enter a password.");
      return false;
    }
  
    // If all inputs are valid, create account object
    var account = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      email: email,
      mobile: mobile,
      pincode: pincode,
      password: password,
    };
  
    // Save account object to localStorage
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    accounts.push(account);
    localStorage.setItem("accounts", JSON.stringify(accounts));
  
    // Redirect to sign in page
    window.location.href = "otp.html";
  }
  