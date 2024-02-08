var searchedIngredient = document.getElementById("searched-ingredient");
var submitIngredientEl = document.getElementById("submit-btn");
var ingredientUnordered = document.getElementById("ingredients-list");
var clearHistoryBtn = document.getElementById("clear-btn")
var ingredientList = [];
var modal = document.getElementById("modalId");
var span = document.getElementsByClassName("close")[0];

// Function to show the modal
function showModal() {
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}

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
    
    var inputIngredients = searchedIngredient.value.trim(); // Get the value of the input field and remove leading/trailing whitespaces
    var ingredientsArray = inputIngredients.split(","); // Split the input into an array of ingredients using commas
    var ingredientCount = ingredientsArray.length; // Get the number of ingredients
  
    // Check if the number of ingredients exceeds 4
    if (ingredientCount > 4) {
      showModal(); // Call the showModal function to display the modal
    }
}

span.onclick = function() {
  hideModal();
};

// Event listener for clicking outside the modal to close it
window.onclick = function(event) {
  if (event.target == modal) {
    hideModal();
  }
};

submitIngredientEl.addEventListener("click", saveToLocalStorage,);
clearHistoryBtn.addEventListener("click",clearIngredientsList );
showClearHistory();


