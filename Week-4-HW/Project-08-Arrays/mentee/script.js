// ---------- STEP 1: Create the array ----------
// Create an empty array called guestList to store names
// Damien Note: I changed the variable name here cause it was conflicting with step 2 having the same name
let listOfGuests = [];

// ---------- STEP 2: Select the DOM elements ----------
// Use getElementById to select:
// - the input field (#guestInput)
// - the Add button (#addBtn)
// - the Remove Last button (#removeBtn)
// - the <ul> list (#guestList)
// - the <p> with the total count (#totalCount)

const guestInput = document.getElementById("guestInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const guestList = document.getElementById("guestList");
const totalCount = document.getElementById("totalCount");

// ---------- STEP 3: Create a function called renderList() ----------
// Inside the function:
// 3.1 – Clear the existing <ul> content using innerHTML
// 3.2 – Use a for loop to go through guestList
// 3.3 – For each name:
//       - create a new <li> element
//       - set its innerText to the guest name
//       - append it to the <ul>
// 3.4 – Update the totalCount paragraph with guestList.length

const renderList = () => {

  guestList.innerHTML = "";

  for (let i = 0; i < listOfGuests.length; ++i)
  {
    const node = document.createElement("li");
    node.innerText = listOfGuests[i];
    guestList.appendChild(node);
  }

  totalCount.innerHTML = "Total Guests: " + listOfGuests.length;

  // My first solution
  /* guestList.innerHTML = "";

  let newInnerHTML = "";
  for (let i = 0; i < listOfGuests.length; ++i)
  {
    newInnerHTML += "<li>" + listOfGuests[i] + "</li>";
  }
  guestList.innerHTML = newInnerHTML;
  totalCount.innerHTML = "Total Guests: " + listOfGuests.length; */
}

// ---------- STEP 4: Create a function called handleAdd() ----------
// Inside the function:
// 4.1 – Get the value from the input box and trim it (Done)
// 4.2 – If the value is empty, alert the user and stop the function (Done)
// 4.3 – Otherwise, use push() to add the name to guestList (Done)
// 4.4 – Clear the input field (Done)
// 4.5 – Call renderList() to update the UI (Done)

const handleAdd = () => {
  const inputText = guestInput.value.trim();
  if (inputText) {
    listOfGuests.push(guestInput.value);
    guestInput.value = "";
  } else {
    alert("Please type a guest name to add");
  }

  renderList();
}

// ---------- STEP 5: Create a function called handleRemoveLast() ----------
// Inside the function:
// 5.1 – If the array is empty, alert the user and stop (Done)
// 5.2 – Otherwise, use pop() to remove the last name (Done)
// 5.3 – Call renderList() to update the UI (Done)

const handleRemoveLast = () => {
  let guestArray = guestList.querySelectorAll("li");
  if (guestArray.length) {
    listOfGuests.pop();
  }
  else {
    alert("Nothing to remove");
  }

  renderList();
}

// ---------- STEP 6: Add event listeners ----------
// Add a click event to the Add button that calls handleAdd()
addBtn.addEventListener("click", handleAdd);
// Add a click event to the Remove Last button that calls handleRemoveLast()
removeBtn.addEventListener("click", handleRemoveLast);

// ---------- STEP 7: Call renderList() at the end ----------
// This makes sure the list is empty and count is 0 when the page loads
renderList();