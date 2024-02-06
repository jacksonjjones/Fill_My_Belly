var searchedIngredient = document.getElementById("searched-ingredient");
var submitIngredientEl = document.getElementById("submit-btn");
var ingredientUnordered = document.getElementById("ingredients-list");
var clearHistoryBtn = document.getElementById("clear-btn")
var ingredientList = [];

var parsedItems = localStorage.getItem("list");
if (parsedItems) {
  ingredientList = JSON.parse(parsedItems);
  for (i = 0; i < ingredientList.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = ingredientList[i];
    listItem.classList.add("m-2");
    ingredientUnordered.appendChild(listItem);
  }
}

function showClearHistory() {
  if (ingredientUnordered.children.length > 0) {
    clearHistoryBtn.classList.remove("hidden");
    clearHistoryBtn.classList.add("bg-amber-800")
    clearHistoryBtn.classList.add("text-amber-600")
    clearHistoryBtn.classList.add("text-xs")
    clearHistoryBtn.classList.add("p-1")
    clearHistoryBtn.classList.add("rounded-md")
  } else {
    clearHistoryBtn.classList.add("hidden");
  }
}

function clearIngredientsList() {
  ingredientList = [];
  localStorage.removeItem("list");
  ingredientUnordered.innerHTML = "";
  clearHistoryBtn.classList.add("hidden");
}

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
  var listItem = document.createElement("li");
  listItem.textContent = item1;
  listItem.classList.add("m-2");
  ingredientUnordered.appendChild(listItem);
  clearHistoryBtn.classList.remove("hidden");
  clearHistoryBtn.classList.add("bg-amber-800")
    clearHistoryBtn.classList.add("text-amber-600")
    clearHistoryBtn.classList.add("text-xs")
    clearHistoryBtn.classList.add("p-1")
    clearHistoryBtn.classList.add("rounded-md")
}

submitIngredientEl.addEventListener("click", saveToLocalStorage,);
clearHistoryBtn.addEventListener("click",clearIngredientsList );
showClearHistory();


