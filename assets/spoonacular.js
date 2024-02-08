// Makin some variables
var apiKey = '28d6cec782174195b837ba8420030c9f';
var submitBtn = document.getElementById('submit-btn');

// Function to call the Spoonacular API with ingredients
function getRecipesByIngredients(ingredients) {


    // query to ping for ingredients
    var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&apiKey=${apiKey}&fillIngredients=true`;
    // Api request 
    return fetch(apiUrl).then(
        function (response) {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            return response.json();

        }
    )
}
//  query to ping recipes
function getFullRecipe(recipeId) {

    return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`).then(
        function (response) {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            return response.json();

        })
}
//Pull ingredients from user input
var ingredientsInput = document.getElementById('searched-ingredient');

function getRecipesByIngredientHandler() {
    var ingredients = ingredientsInput.value

    getRecipesByIngredients(ingredients)
        .then(function (recipes) {
            if (!recipes.results.length) {
                return alert("Too Many Ingredients. Try fewer Ingredients!")
            }
            // DOM manipulations to display recipes
            var recipeDisplay = document.querySelector('.recipe-container')
            for (var recipe of recipes.results) {
                getFullRecipe(recipe.id).then(function (data) {
                    var recipeImage = data.image
                    var recipeSteps = data.instructions
                    var recipeLink = data.sourceUrl
                    var recipeName = data.title
                    var elementMaker = document.createElement('h1')
                    var elementPic = document.createElement('img')
                    var elementRecipe = document.createElement('p')

                    elementMaker.textContent = recipeName
                    recipeDisplay.appendChild(elementMaker)
                    elementPic.setAttribute("src", recipeImage)
                    elementPic.setAttribute("style", "height: 93px; width: 139px;")
                    recipeDisplay.appendChild(elementPic)
                    elementRecipe.innerHTML = recipeSteps
                    recipeDisplay.appendChild(elementRecipe)


                })
            }

        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}
submitBtn.addEventListener("click", getRecipesByIngredientHandler);

