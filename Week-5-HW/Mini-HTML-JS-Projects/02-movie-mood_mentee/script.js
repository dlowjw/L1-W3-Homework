// STEP 1: Make an object called movieRecs
// This object should have 3 keys: happy, sad, excited
// Each key has an array of movie title strings

let movieRecs = { 
  happy: ["Hot Fuzz", "Rush Hour", "The Hangover"],
  sad: ["The Lion King", "Grave of the Fireflies"],
  excited: ["Avengers", "John Wick", "Inception"]
}


// STEP 2: Select all 3 buttons and the <ul> from the HTML using getElementById
let happyBtn = document.getElementById("happy");
let sadBtn = document.getElementById("sad");
let excitedBtn = document.getElementById("excited");
let movieList = document.getElementById("movie-list");

// STEP 3: Create a function called showMovies
// It should accept one argument called mood

// STEP 4: Inside the function, clear the old list using innerHTML = ""

// STEP 5: Loop through the movies for that mood using forEach

// STEP 6: For each movie:
// - create a <li> element
// - set its textContent to the movie title
// - append it to the movie list

function showMovies(mood) {
  movieList.innerHTML = "";
  console.log(movieRecs[mood]);
  movieRecs[mood].forEach((movie) => {
    let listItem = document.createElement('li');
    listItem.textContent = movie;
    movieList.appendChild(listItem);
  });
  
}

// STEP 7: Add click events to each button
// Each one should call showMovies with the appropriate mood string

happyBtn.addEventListener("click", () => { showMovies("happy") });
sadBtn.addEventListener("click", () => { showMovies("sad") });
excitedBtn.addEventListener("click", () => { showMovies("excited") });
