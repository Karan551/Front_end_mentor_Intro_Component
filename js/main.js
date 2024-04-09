const btn = document.querySelector("#submit-btn");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
let isValid = true;

function validEmail(email) {
  // Regular expression for validating email addresses
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function validateForm(event) {
  event.preventDefault();
  if (fname.value === "" || fname.value == null) {
    document.querySelector(".error-icon").style.display = "block";
    document.querySelector(".error-msg").style.display = "block";
    isValid = false;
  } else {
    document.querySelector(".error-icon").style.display = "none";
    document.querySelector(".error-msg").style.display = "none";
  }

  if (lname.value === "" || lname.value == null) {
    document.querySelector("#lname-error-icon").style.display = "block";
    document.querySelector("#lname-error-msg").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#lname-error-icon").style.display = "none";
    document.querySelector("#lname-error-msg").style.display = "none";
  }

  if (email.value === "" || email.value == null || !validEmail(email.value)) {
    document.querySelector("#email-error-icon").style.display = "block";
    document.querySelector("#email-error-msg").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#email-error-icon").style.display = "none";
    document.querySelector("#email-error-msg").style.display = "none";
  }

  if (password.value === "" || password.value == null) {
    document.querySelector("#pwd-error-icon").style.display = "block";
    document.querySelector("#pwd-error-msg").style.display = "block";
    isValid = false;
  } else {
    document.querySelector("#pwd-error-icon").style.display = "none";
    document.querySelector("#pwd-error-msg").style.display = "none";
  }
  // If form is valid, submit it
  if (isValid) {
    document.getElementById("myForm").submit(); // Submit the form
  }
}

btn.addEventListener("click", validateForm);
