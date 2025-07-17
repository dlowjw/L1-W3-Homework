# 🎁 Gift Suggestion Generator

## What You Will Learn

- How to use a dropdown (`<select>`) to let the user choose an option
- How to use objects to organize different sets of data
- How to use `getElementById()` to select page elements
- How to respond to a button click using `addEventListener("click", ...)`
- How to use `.value` to get the selected dropdown option
- How to use an `if/else` to check if data exists for a selected key
- How to use `forEach()` to display each item in an array
- How to use `.appendChild()` to insert new elements into the page

---

## Instructions (Same for Mentor and Mentee)

### HTML

1. Add a `<select>` element with the ID `person-select`.
   - Inside, add `<option>` tags for `Mom`, `Friend`, and `Child`.
2. Add a `<button>` with the ID `suggest-btn` and label it `Suggest Gifts`.
3. Add a `<div>` with the ID `gift-results` where gift ideas will be displayed.
4. At the bottom of the `<body>`, link to your JavaScript file:
   ```html
   <script src="script.js"></script>
   ```

### JavaScript

1. Create an object called `giftIdeas` with keys like `"Mom"`, `"Friend"`, and `"Child"`.
   - Each key should map to an array of gift ideas (3 strings per array).
2. Select the `<select>`, `<button>`, and `<div>` using `getElementById()`.
3. Add a `click` event listener to the button.
4. Inside the event:
   - Get the selected value from the dropdown using `.value`.
   - Use an `if/else`:
     - If gift ideas exist for that key:
       - Loop through the array using `forEach`
       - For each idea:
         - Create a `<p>` tag
         - Set its `.textContent` to the gift name
         - Append it to the results div
     - Else:
       - Set the `.textContent` of the div to `"No gift ideas available."`
