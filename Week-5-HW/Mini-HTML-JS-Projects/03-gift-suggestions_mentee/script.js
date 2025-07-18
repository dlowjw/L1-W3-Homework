// STEP 1: Create an object called giftIdeas
// Each key (Mom, Friend, Child) holds an array of 3 gift suggestions
let giftIdeas = {
  mom: ["handbag", "perfume", "necklace"],
  friend: ["board game", "keychain", "plushie"],
  child: ["lego", "fidget spinner", "rubik's cube"]
}

// STEP 2: Select the dropdown, button, and results <div> from the HTML
let personSelect = document.getElementById("person-select");
let suggestButton = document.getElementById("suggest-btn");
let giftResults = document.getElementById("gift-results");

// STEP 3: Add a click event to the button
// When clicked, a function will run
suggestButton.addEventListener("click", suggestGift);

// STEP 4: Inside the function:
// - get the value from the dropdown using .value
// - use if/else:
//   - if that value exists as a key in giftIdeas, loop through it with forEach
//     - for each item, create a <p>, set textContent, and append it to the results div
//   - else show “No gift ideas available.”
function suggestGift() {
  giftResults.innerHTML = "";
  
  let giftReceipient = personSelect.value;

  // console.log(giftReceipient);

  let giftList;

  switch (giftReceipient) {
    case "Mom":
      giftList = giftIdeas["mom"];
      break;
    case "Friend":
      giftList = giftIdeas["friend"];
      break;
    case "Child":
      giftList = giftIdeas["child"];
      break;
  }

  // console.log(giftList);

  giftList.forEach((gift) => {
    let giftParagraph = document.createElement("p");
    giftParagraph.textContent = gift;
    giftResults.appendChild(giftParagraph);
  });
}