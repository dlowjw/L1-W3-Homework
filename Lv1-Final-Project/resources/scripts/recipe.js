const url = "https://api.spoonacular.com/recipes/random";
const key = 'cc0e5594b35e41b3b74872e2971cf192';

const recipeContainer = document.getElementById("recipe-container");

async function getRecipe() {
  try {
    const response = await axios.get(url, {
      headers: {
        "x-api-key": key,
        // if we want more recipes
        // number: 1 
      }
    });

    // console.log(response.data);

    const recipeData = response.data.recipes[0];

    console.log(recipeData);
    const imgURL = recipeData.image;
    const time = recipeData.readyInMinutes;
    const servings = recipeData.servings;
    const itemName = recipeData.title;
    const ingredients = recipeData.extendedIngredients;
    const instructions = recipeData.instructions;
    const summary = recipeData.summary;

    // console.log(imgURL);
    // console.log(time);
    // console.log(servings);
    // console.log(itemName);
    // console.log(ingredients);
    // console.log(instructions);

    let ingredientHTML = "";
    ingredients.forEach(ing => {
      ingredientHTML += `<li>${ing.name}</li>`
    });

    recipeContainer.innerHTML = `<img src="${imgURL}" alt = "${itemName}" style="align-self: center; width:500px;" />
                                 <h2 style="text-align:center">${itemName}</h2>
                                 <p>${summary}</p>
                                 <h3>Time: ${time} minutes</h3>
                                 <h3>Servings: ${servings}</h3>
                                 <h3>Ingredients:</h3>
                                 <ul>${ingredientHTML}</ul>
                                 <h3>Directions:</h3>
                                 <p>${instructions}</p>`;

  } catch (error) {
    alert(error);
  }
}

getRecipe();
// setInterval(getRecipe, 10000);