// STEP 1: Create an array to store your dessert options
// Each item is an object that describes the dessert
// The object contains:
// - name: the dessert’s name (string)
// - price: the cost of the dessert (number)
// - inStock: whether it’s available (true/false)


// STEP 2: Select the elements where we'll add buttons and show messages
// Use getElementById to connect JS to the HTML elements with id="menu-buttons" and id="order-summary"


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
