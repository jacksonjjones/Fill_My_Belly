var apiKey = 'ff0ab97c408a433aa7dea6ebb48a0161';
var submitBtn = document.getElementById('submit-btn');

// Function to call the Spoonacular API with ingredients
async function getRecipesByIngredients(ingredients) {
    var apiUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&apiKey=${apiKey}&fillIngredients=true`;

    try {
        var response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        var data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Example usage
var ingredients = document.getElementById('search-ingredient').value;
// Ingredients from the list
getRecipesByIngredients(ingredients)
console.log(ingredients)
    .then(recipes => {
        console.log(recipes)
        if (!recipes.results.length) {
            return alert("Too Many Ingredients. Try fewer Ingredients!")
        }
        for (var recipe of recipes.results) {
            fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`).then(
                function (res) {
                    return res.json()

                }).then(function (data) {
                    console.log(data)
                })
        }


    })
    .catch(error => {
        console.error('Error:', error);
    });

submitBtn.addEventListener("click", getRecipesByIngredients
)