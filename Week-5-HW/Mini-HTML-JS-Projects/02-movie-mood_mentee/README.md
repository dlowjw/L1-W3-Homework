# 🎬 Movie Mood Matcher

## What You Will Learn

- How to create an object that holds arrays of movies for different moods
- How to select buttons and elements from HTML using `document.getElementById()`
- How to define a traditional function that accepts a parameter (mood)
- How to use `.addEventListener("click", ...)` to listen for button clicks
- How to use `.innerHTML` and `.textContent` to update page content
- How to use a `forEach` loop to go through a list of movie titles

---

## Instructions

### HTML

1. In your `<body>`, add:
   - A `<h2>` with the text: `Pick your mood`
   - Three `<button>` elements with the following IDs:
     - `happy-btn`
     - `sad-btn`
     - `excited-btn`
   - A `<ul>` with the ID `movie-list` where movie results will be shown.
2. At the bottom of the `<body>`, link your script with:
   ```html
   <script src="script.js"></script>
   ```

### JavaScript

1. Create an object called `movieRecs` with keys like `"happy"`, `"sad"`, and `"excited"`.
   - Each key should point to an array of 3 movie titles (strings).
2. Use `document.getElementById()` to select the three buttons and the `movie-list` element.
3. Create a traditional function called `showMovies(mood)`.
   - This function should:
     - Clear the previous results with `movieList.innerHTML = ""`
     - Use `movieRecs[mood].forEach(...)` to loop through that mood’s array
     - For each movie:
       - Create an `<li>` element
       - Set its `textContent` to the movie title
       - Use `.appendChild()` to add it to the `<ul>`
4. Add click event listeners to each button that call `showMovies("happy")`, `showMovies("sad")`, and `showMovies("excited")` depending on which button was clicked.
