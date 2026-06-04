let loginForm = document.getElementById("login-form");
let toggleNavStatus = false;
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateLogin();
});

function validateLogin() {
  let username = document.getElementById("uname").value;
  let password = document.getElementById("pwd").value;

  if (username === "admin" && password === "password123") {
    window.location.href = "index.html";
  } else {
    document.querySelector(".modal").style.display = "block";
    console.log("Invalid credentials");
  }
}

function dismissModal() {
  document.querySelector(".modal").style.display = "none";
}

function toggleNav() {
  let navSidebar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    navSidebar.style.width = "250px";
    toggleNavStatus = true;
  } else {
    navSidebar.style.width = "0";
    toggleNavStatus = false;
  }
}
