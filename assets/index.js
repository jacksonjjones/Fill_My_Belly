var searchedIngredient = document.getElementById("searched-ingredient");
var submitIngredientEl = document.getElementById("submit-btn");
var ingredientUnordered = document.getElementById("ingredients-list");
var ingredientList = [];

function saveToLocalStorage() {
  var item = searchedIngredient.value;
  ingredientList.unshift(item);
  addToIngredientList();
  searchedIngredient.value = ""; // this can move into another function
  var stringifiedList = JSON.stringify(ingredientList);
  localStorage.setItem("list", stringifiedList);
}

function addToIngredientList() {
  var item1 = searchedIngredient.value;
  console.log(item1);
  var itemName = document.createElement("li");
  itemName.textContent = item1;
  ingredientUnordered.appendChild(itemName);
}

submitIngredientEl.addEventListener("click", saveToLocalStorage);
