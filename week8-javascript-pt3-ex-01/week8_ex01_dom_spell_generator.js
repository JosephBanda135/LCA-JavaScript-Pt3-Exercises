const spellArea = document.getElementById("spellArea");
const generateButton = document.getElementById("generateButton");
const ingredientsList = document.getElementById("ingredientsList");

generateButton.addEventListener("click", function () {
  const ingredients = document.querySelectorAll("#ingredientsList li");

  const randomIndex = Math.floor(Math.random() * ingredients.length);
  const selectedIngredient = ingredients[randomIndex];

  let countdown = 3;

  spellArea.textContent = countdown;

  const timer = setInterval(function () {
    countdown--;
    spellArea.textContent = countdown;

    if (countdown === 0) {
      clearInterval(timer);

      spellArea.textContent = selectedIngredient.textContent;

      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      spellArea.style.backgroundColor = randomColor;
    }
  }, 1000);
});

resetButton.addEventListener("click", function () {
  spellArea.textContent = "";
  spellArea.style.backgroundColor = "";
});
