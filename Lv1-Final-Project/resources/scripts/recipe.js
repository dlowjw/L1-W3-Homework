const url = "https://api.spoonacular.com/recipes/random";
const key = 'cc0e5594b35e41b3b74872e2971cf192';

async function getRecipe() {
  try {
    const response = await axios.get(url, {
      headers: {
        "x-api-key": key,
        // number: 1
      }
    });
    console.log(response.data);

  } catch (error) {
    alert(error);
  }
}

getRecipe();
// setInterval(getRecipe, 10000);