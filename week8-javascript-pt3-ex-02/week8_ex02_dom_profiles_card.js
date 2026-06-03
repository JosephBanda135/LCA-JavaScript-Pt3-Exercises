//Task 2
let updateNameBtn = document.getElementById("updateNameBtn");
let profileName = document.getElementById("profileName");
updateNameBtn.addEventListener("click", function () {
  let newName = prompt("New Name");

  profileName.textContent = newName;
});

let updateRoleBtn = document.getElementById("updateRoleBtn");
let profileRole = document.getElementById("profileRole");
updateRoleBtn.addEventListener("click", function () {
  let newRole = prompt("Add New Role");

  profileRole.textContent = newRole;
});

//Task 3

let profileCard = document.getElementById("profileCard");
let toggleStatusBtn = document.getElementById("toggleStatusBtn");
toggleStatusBtn.addEventListener("click", function () {
  profileCard.classList.toggle("active-status");
});

//Task 4
let changeImageBtn = document.getElementById("changeImageBtn");
let profileImage = document.getElementById("profileImage");

changeImageBtn.addEventListener("click", function () {
  let newImage = prompt("Insert new image URL");

  profileImage.src = newImage;
});
