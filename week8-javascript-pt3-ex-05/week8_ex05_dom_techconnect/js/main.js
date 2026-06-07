const toggleViewBtn = document.getElementById("toggleViewBtn");
const developerContainer = document.getElementById("developerContainer");
const searchInput = document.getElementById("searchInput");
const developerCount = document.getElementById("developerCount");

const addDeveloperBtn = document.getElementById("addDeveloperBtn");

const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const locationInput = document.getElementById("locationInput");
const avatarInput = document.getElementById("avatarInput");
const skillsInput = document.getElementById("skillsInput");

let developersData = [];
let isCardView = true;

fetch("developers.json")
  .then((response) => response.json())
  .then((data) => {
    developersData = data;
    displayDevelopers(developersData);
    updateCounter(developersData);
  });

function displayDevelopers(list) {
  developerContainer.innerHTML = "";

  list.forEach((dev) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
      <div class="dev-card">

    
        <img src="${dev.avatar}" alt="avatar" />

  
        <h5>${dev.name}</h5>

        <p>${dev.role}</p>

      
        <p>${dev.location}</p>

        
        <p class="skills">${dev.skills.join(", ")}</p>

        <span class="${dev.availableForHire ? "available" : "not-available"}">
          ${dev.availableForHire ? "Available" : "Not Available"}
        </span>

      </div>
    `;

    developerContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", function () {
  const value = searchInput.value.toLowerCase();

  const filtered = developersData.filter((dev) => {
    return (
      dev.name.toLowerCase().includes(value) ||
      dev.role.toLowerCase().includes(value) ||
      dev.skills.join(" ").toLowerCase().includes(value)
    );
  });

  displayDevelopers(filtered);
  updateCounter(filtered);
});

function updateCounter(list) {
  developerCount.textContent = `${list.length} Developers`;
}

addDeveloperBtn.addEventListener("click", function () {
  const newDeveloper = {
    name: nameInput.value,
    role: roleInput.value,
    location: locationInput.value,
    avatar: avatarInput.value,
    skills: skillsInput.value.split(","),
    availableForHire: true,
  };

  developersData.push(newDeveloper);

  displayDevelopers(developersData);
  updateCounter(developersData);

  nameInput.value = "";
  roleInput.value = "";
  locationInput.value = "";
  avatarInput.value = "";
  skillsInput.value = "";
});

toggleViewBtn.addEventListener("click", function () {
  isCardView = !isCardView;

  if (isCardView) {
    displayDevelopers(developersData);
    toggleViewBtn.textContent = "Switch to Table View";
  } else {
    showTableView(developersData);
    toggleViewBtn.textContent = "Switch to Card View";
  }
});

function showTableView(list) {
  developerContainer.innerHTML = "";

  let table = document.createElement("table");
  table.border = "1";

  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Location</th>
    </tr>
  `;

  list.forEach(function (dev) {
    table.innerHTML += `
      <tr>
        <td>${dev.name}</td>
        <td>${dev.role}</td>
        <td>${dev.location}</td>
      </tr>
    `;
  });

  developerContainer.appendChild(table);
}
