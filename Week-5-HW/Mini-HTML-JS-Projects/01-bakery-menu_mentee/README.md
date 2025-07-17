# 🍰 Bakery Menu Builder

## What You Will Learn

- How to use arrays of objects to organize data about desserts
- How to select HTML elements using `document.getElementById()`
- How to create elements dynamically with `document.createElement()`
- How to change text on the screen using `.textContent`
- How to respond to user actions using `.addEventListener("click", ...)`
- How to use a traditional function and a `forEach` loop to loop through an array
- How to use `if/else` statements to check a condition (like whether a dessert is in stock)
- How to insert new elements into the page using `.appendChild()`

---

## Instructions

### HTML

1. Create a new HTML5 file.
2. Inside the `<body>`, add:
   - A `<h1>` element that says `Bakery Menu`.
   - A `<div>` with the id `menu-buttons` where the JavaScript will insert buttons for each dessert.
   - A `<p>` element with the id `order-summary` that will show the message for the selected dessert.
3. At the bottom of the `<body>`, add the following script tag:
   ```html
   <script src="script.js"></script>
   ```

### JavaScript

1. Create a JavaScript file called `script.js`.
2. At the top, create an array named `desserts`. Each item in the array should be an object with 3 properties:
   - `name`: a string, the name of the dessert (like `"Cupcake"`)
   - `price`: a number, how much it costs (like `3`)
   - `inStock`: a boolean, `true` if available, `false` if sold out
3. Use `document.getElementById("menu-buttons")` and `document.getElementById("order-summary")` to select the container and output areas.
4. Write a `forEach` loop that loops through each dessert.
5. Inside the loop:
   - Create a `<button>` element using `document.createElement("button")`
   - Use `.textContent` to set the button’s label to the dessert’s name.
   - Add an event listener to the button with `.addEventListener("click", function() {...})`
     - Inside this function, use `if/else`:
       - If the dessert is in stock (`dessert.inStock === true`), update `order-summary` to say “You selected: Cupcake ($3)”
       - If the dessert is not in stock, update `order-summary` to say “Sorry, Cupcake is sold out.”
   - Finally, use `.appendChild()` to add the button to the `menu-buttons` div.
