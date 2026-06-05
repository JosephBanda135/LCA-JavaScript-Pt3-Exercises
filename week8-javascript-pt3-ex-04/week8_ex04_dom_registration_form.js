let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  document.getElementById("username").style.border = "";
  document.getElementById("email").style.border = "";
  document.getElementById("password").style.border = "";
  document.getElementById("confirmPassword").style.border = "";

  document.getElementById("formMessage").textContent = "";

  // username
  if (username === "") {
    document.getElementById("usernameError").textContent =
      "Username cannot be empty";
    document.getElementById("username").style.border = "2px solid red";
    isValid = false;
  } else {
    document.getElementById("username").style.border = "2px solid green";
  }

  // email
  if (email === "") {
    document.getElementById("emailError").textContent = "Email cannot be empty";
    document.getElementById("email").style.border = "2px solid red";
    isValid = false;
  } else if (!email.includes("@")) {
    document.getElementById("emailError").textContent = "Email must contain @";
    document.getElementById("email").style.border = "2px solid red";
    isValid = false;
  } else {
    document.getElementById("email").style.border = "2px solid green";
  }

  // password
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password cannot be empty";
    document.getElementById("password").style.border = "2px solid red";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    document.getElementById("password").style.border = "2px solid red";
    isValid = false;
  } else {
    document.getElementById("password").style.border = "2px solid green";
  }

  // confirm password
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Confirm password cannot be empty";
    document.getElementById("confirmPassword").style.border = "2px solid red";
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    document.getElementById("confirmPassword").style.border = "2px solid red";
    isValid = false;
  } else {
    document.getElementById("confirmPassword").style.border = "2px solid green";
  }

  // success
  if (isValid) {
    document.getElementById("formMessage").textContent =
      "Registration successful!";

    console.log("Username:", username);
    console.log("Email:", email);
  }
});
