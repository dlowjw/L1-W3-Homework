/* 
STEP 1: SELECT HTML ELEMENTS
Use `document.getElementById()` to store these in variables:
- startScreen          → section with id="start-screen"
- questionScreen       → section with id="question-screen"
- resultScreen         → section with id="result-screen"
- startBtn             → button with id="start-btn"
- restartBtn           → button with id="restart-btn"
- questionText         → h2 with id="question-text"
- answersDiv           → div with id="answers"
- timerDisplay         → div with id="timer"
- finalScoreEl         → p with id="final-score"
- resultMsgEl          → h2 with id="result-message"
*/

let startScreen = document.getElementById("start-screen");
let questionScreen = document.getElementById("question-screen");
let resultScreen = document.getElementById("result-screen");

let startBtn = document.getElementById("start-btn");
let restartBtn = document.getElementById("restart-btn");

let questionText = document.getElementById("question-text");
let answersDiv = document.getElementById("answers");
let timerDisplay = document.getElementById("timer");
let finalScoreEl = document.getElementById("final-score");
let resultMsgEl = document.getElementById("result-message");

// console.log("DOM elements loaded:", {
//   startScreen,
//   questionScreen,
//   resultScreen,
//   startBtn,
//   restartBtn,
//   questionText,
//   answersDiv,
//   timerDisplay,
//   finalScoreEl,
//   resultMsgEl,
// });

/* 
STEP 2: CREATE QUIZ QUESTIONS ARRAY
Create a variable called `questions` that stores an array of objects.
Each object should include:
- question: a string
- answers: an array of 4 strings
- correct: the index (0–3) of the correct answer
*/

let questions = [
  {
    question: "Which declaration creates a block-scoped variable?",
    answers: ["var", "let", "function", "const var"],
    correct: 1,
  },

  {
    question: "What is the result of 3 + '2' ?",
    answers: ["5", "32", "NaN", "undefined"],
    correct: 1,
  },

  {
    question: "which array method loops and returns a new array",
    answers: ["forEach()", "filter()", "map()", "reduce()"],
    correct: 2,
  },

  {
    question: "DOM stands for..",
    answers: [
      "Document object Model",
      "Data object Model",
      "Dynamic output Method",
      "Document order Model",
    ],
    correct: 0,
  },
];

// console.log("Loaded quiz data:", questions);

/* 
STEP 3: DEFINE STATE VARIABLES
You will need:
- currentIndex   → number to track which question we’re on (start at 0)
- score          → number of correct answers (start at 0)
- timeLeft       → number for countdown timer (start at 10)
- timerId        → to store setInterval reference
*/

let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timerId = null;
// console.log(currentIndex);
// console.log("intial state:", { currentIndex, score, timeLeft, timerId });
/* 
STEP 4: ADD EVENT LISTENERS
Use `.addEventListener("click", ...)` on:
- startBtn to call the `startGame()` function
- restartBtn to call the same `startGame()` function
*/

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
console.log("This works");

function startGame() {
  console.log("Start game");
  currentIndex = 0;
  score = 0;
  swapScreen(startScreen, questionScreen);
  showQuestion();
}

console.log({ currentIndex, score });

/* 
STEP 5: FUNCTION – startGame()
Create a function named `startGame` that:
- Sets currentIndex and score back to 0
- Switches from the start screen to the question screen
- Calls the `showQuestion()` function
*/

/* 
STEP 6: FUNCTION – showQuestion()
Create a function named `showQuestion` that:
- Clears previous answers from `answersDiv`
- Gets the current question from the `questions` array
- Updates `questionText` with the question
- Loops through the answers array:
    - Creates a <button>
    - Sets text and adds class "answer-btn"
    - Adds a `data-index` with the index value
    - Adds a click event to call `handleAnswer`
    - Appends the button to `answersDiv`
- Calls `resetTimer()`
*/

const showQuestion = () => {
  answersDiv.innerHTML = "";
  let q = questions[currentIndex];
  questionText.textContent = q.question;

  q.answers.forEach((answer, i) => {
    let button = document.createElement("button");
    button.ClassName = "answer-btn";
    button.textContent = answer;
    button.dataset.index = i;

    button.setAttribute("role", "button");
    button.setAttribute("tab-index", "0");

    button.addEventListener("click", handleAnswer);
    answersDiv.appendChild(button);
  });
  resetTimer();
};

console.log(`q.question + 1`, q.question);
/* 
STEP 7: FUNCTION – handleAnswer()
Create a function named `handleAnswer` that:
- Stops the timer using `clearInterval`
- Gets which button the user clicked
- Loops through all answer buttons:
    - Adds class "correct" to the right answer
    - Adds class "wrong" to the selected wrong answer
    - Disables all buttons
- If answer is correct, increase the `score`
- After a short delay (use `setTimeout`):
    - If there are more questions, call `showQuestion()`
    - If quiz is over, call `showResults()`
*/

function handleAnswer(e) {
  clearInterval(timerId);

  const chosenIdx = Number(e.target.dataset.index);
  const q = questions[currentIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    const idx = Number(btn.dataset.index);

    if (chosenIdx === -1) {
      if (idx === q.correct) btn.classList.add("correct");
    } else {
      if (idx === q.correct) btn.classList.add("correct");
      else if (idx === chosenIdx) btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (chosenIdx === q.correct) {
    score++;
  }

  setTimeout(() => {
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1200);
}

/* 
STEP 8: FUNCTION – showResults()
Create a function named `showResults` that:
- Switches from question screen to result screen
- Updates `finalScoreEl` with the user’s score
- Shows a message in `resultMsgEl` depending on how well they did:
    - Full score → “✨ Supreme Wizard of JavaScript! ✨”
    - Half or more → “🧙 Apprentice Mage – Keep Practicing!”
    - Less than half → “💀 Novice – Study the ancient scrolls again!”
*/

/* 
STEP 9: FUNCTION – resetTimer()
Create a function named `resetTimer` that:
- Sets `timeLeft` to 10
- Updates `timerDisplay` each second
- When it reaches 0:
    - Stops the timer
    - Calls `handleAnswer()` with a fake object to simulate “no answer”
      (use: { target: { dataset: { index: -1 } } })
*/

/* 
STEP 10: FUNCTION – swapScreen()
Create a function named `swapScreen(hideEl, showEl)` that:
- Hides all elements with the class `.screen` using `classList.add("hidden")`
- Shows the element passed as `showEl` using `classList.remove("hidden")`
*/
