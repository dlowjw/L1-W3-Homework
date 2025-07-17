// STEP 1: Create an array to store your dessert options
// Each item is an object that describes the dessert
// The object contains:
// - name: the dessert’s name (string)
// - price: the cost of the dessert (number)
// - inStock: whether it’s available (true/false)

let desserts = [
  {name: "Ice Cream", price: 3, inStock: true},
  {name: "Fruit Tart", price: 2, inStock: false},
  {name: "Scone", price: 1.5, inStock: true},
  {name: "Brownie", price: 6, inStock: true},
  {name: "Cake", price: 7, inStock: false}
];

// console.log(desserts);

// STEP 2: Select the elements where we'll add buttons and show messages
// Use getElementById to connect JS to the HTML elements with id="menu-buttons" and id="order-summary"

let menuButtons = document.getElementById('menu-buttons');
let orderSummary = document.getElementById('order-summary');

// STEP 3: Loop through each dessert in the array using forEach
// This will let us do something (create a button) for every dessert

// STEP 4: Inside the loop, create a button using document.createElement("button")

// STEP 5: Set the button’s text to show the dessert name

// STEP 6: Add a click event to the button using addEventListener
// This means when the button is clicked, a function will run

// STEP 7: Inside the function, check if the dessert is in stock using if/else
  // If inStock is true, show “You selected: [Dessert] ($[Price])”
// If inStock is false, show “Sorry, [Dessert] is sold out.”

// STEP 8: Add the button to the div with appendChild

desserts.forEach((dessert) => {
  button = document.createElement("button");
  button.innerHTML = dessert.name;
  button.addEventListener("click", () => {
    if (dessert.inStock)
      orderSummary.innerHTML = `You selected: ${dessert.name}, $${dessert.price}`;
    else
      orderSummary.innerHTML = `Sorry, ${dessert.name} is sold out.`;
  });
  menuButtons.appendChild(button);
});