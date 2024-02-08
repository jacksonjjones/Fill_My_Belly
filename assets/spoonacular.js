var apiKey = '0b04e58534604c54979d203a2cabe6ee';
var submitBtn = document.getElementById('submit-btn');

// Function to call the Spoonacular API with ingredients
function getRecipesByIngredients(ingredients) {



    var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&apiKey=${apiKey}&fillIngredients=true`;

    return fetch(apiUrl).then(
        function (response) {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            return response.json();

        }
    )
}

function getFullRecipe(recipeId) {

    return fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`).then(
        function (response) {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            return response.json();

        })
}
// Example usage
var ingredientsInput = document.getElementById('searched-ingredient');
// Ingredients from the list
function getRecipesByIngredientHandler() {
    var ingredients = ingredientsInput.value

    getRecipesByIngredients(ingredients)
        .then(function (recipes) {
            if (!recipes.results.length) {
                return alert("Too Many Ingredients. Try fewer Ingredients!")
            }
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
                    elementPic.setAttribute("src", "data.image")
                    recipeDisplay.appendChild(elementPic)
                    elementRecipe.textContent = recipeSteps
                    recipeDisplay.appendChild(elementRecipe)

                })
            }

        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}
submitBtn.addEventListener("click", getRecipesByIngredientHandler);

