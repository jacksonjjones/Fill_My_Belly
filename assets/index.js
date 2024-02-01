var searchedIngredient = document.getElementById("searched-ingredient");
var submitIngredientEl = document.getElementById("submit-btn");
var ingredientList = [];

function saveToLocalStorage(event) {
  event.preventDefault();
  var item = searchedIngredient.value;
  ingredientList.unshift(item);
  searchedIngredient.value = ""; // this can move into another function
  var stringifiedList = JSON.stringify(ingredientList);
  localStorage.setItem("list", stringifiedList);
}

submitIngredientEl.addEventListener("click", saveToLocalStorage);
