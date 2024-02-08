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
    listItem.classList.add("text-2xl")
    ingredientUnordered.appendChild(listItem);
  }
}

function showClearHistory() {
  if (ingredientUnordered.children.length > 0) {
    clearHistoryBtn.classList.remove("hidden");
    clearHistoryBtn.classList.add("text-amber-600")
    clearHistoryBtn.classList.add("text-lg")
    clearHistoryBtn.classList.add("p-1")
    clearHistoryBtn.classList.add("rounded-md")
    clearHistoryBtn.classList.add("hover:text-amber-700")
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
  listItem.classList.add("text-2xl")
  ingredientUnordered.appendChild(listItem);
  clearHistoryBtn.classList.remove("hidden");
    clearHistoryBtn.classList.add("text-amber-600")
    clearHistoryBtn.classList.add("text-lg")
    clearHistoryBtn.classList.add("p-1")
    clearHistoryBtn.classList.add("rounded-md")
    clearHistoryBtn.classList.add("hover:text-amber-700")
}

// Get the modal
var modal = document.getElementById("modalId");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

submitIngredientEl.addEventListener("click", saveToLocalStorage,);
clearHistoryBtn.addEventListener("click",clearIngredientsList );
showClearHistory();


