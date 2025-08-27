// PROJECT: Bookmark Saver — Practice using localStorage (setItem, getItem, removeItem, clear)

// ---------------------------------------------------------------------------
// STEP 1: GET ELEMENTS
// - Use document.getElementById() to grab each element from index.html
// - Store them in variables with these names:
//     titleInput, urlInput, addBtn, showBtn, removeKeyBtn, clearAllBtn, listEl, statusEl, emptyStateEl
// - Console hint: After creating them, console.log a couple to confirm (e.g., titleInput, listEl).

const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const removeKeyBtn = document.getElementById("removeKeyBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const listEl = document.getElementById("list");
const statusEl = document.getElementById("status");
const emptyStateEl = document.getElementById("emptyState");

console.log(titleInput, urlInput, removeKeyBtn, emptyStateEl);

// ---------------------------------------------------------------------------
// STEP 2: FUNCTION loadBookmarks()
// - Create a function named loadBookmarks()
// - Inside it:
//     * Get the data from localStorage with getItem("bookmarks")
//     * Console hint: console.log the raw string you got back
//     * If nothing exists, return an empty array []
//     * If something exists, use JSON.parse() to turn it back into an array
//     * Console hint: console.log the parsed array
// - Return the array at the end

const loadBookmarks = () => {
  const bookmarks = localStorage.getItem("bookmarks");
  console.log(bookmarks);
  try {
    const parsed = bookmarks ? JSON.parse(bookmarks) : [];
    console.log(parsed);
    return parsed;
  } catch (err) {
    console.error("JSON.parse did not work", err);
    return [];
  }
};

// loadBookmarks();

// ---------------------------------------------------------------------------
// STEP 3: FUNCTION saveBookmarks(bookmarksArray)
// - Create a function named saveBookmarks(bookmarksArray)
// - Inside it:
//     * Use JSON.stringify(bookmarksArray) to turn the array into a string
//     * Save it in localStorage with setItem("bookmarks", "...")
//     * Console hint: console.log the stringified data before saving

const saveBookmarks = (bookmarksArray) => {
  const string = JSON.stringify(bookmarksArray);
  localStorage.setItem("bookmarks", string);
  console.log(string);
};

saveBookmarks([1, 2, 3, 4]);

// ---------------------------------------------------------------------------
// STEP 4: FUNCTION render()
// - Create a function named render()
// - Inside it:
//     * Clear listEl so it starts empty
//     * Call loadBookmarks() to get the current array
//     * Console hint: console.log the length of the array you are about to render
//     * If the array is empty → show emptyStateEl and stop
//     * If it has items → hide emptyStateEl
//     * Loop through the array with forEach()
//         - For each bookmark, create an <li>
//         - Create an <a> tag that links to bookmark.url and displays bookmark.title
//         - Create a "Delete" button
//             • On click: remove that bookmark from the array, save again with saveBookmarks(), and call render()
//             • Console hint (inside click): console.log which index you are deleting
//         - Append the <a> and button to the li
//         - Append li to listEl
const render = () => {
  listEl.innerHTML = "";
  const savedBookmarks = loadBookmarks();
  console.log(savedBookmarks.length);

  if (!savedBookmarks.length) {
    emptyStateEl.style.display = "block";
    return;
  }

  emptyStateEl.style.display = "none";

  savedBookmarks.forEach = (bookmark, index) => {
    const li = document.createElement("li");
    const bookmarkURL = document.createElement("a");
    bookmarkURL.href = bookmark.url;
    bookmarkURL.target = "_blank";
    bookmarkURL.rel = "noopener noreferrer";
    bookmarkURL.textContent = bookmark.title || bookmark.url;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", () => {
      // delete -> save -> render
      const saveAgain = loadBookmarks();
      saveAgain.splice(index, 1);
      saveBookmarks(saveAgain);
      render();
      setStatus();

      const actions = document.createElement("div");
      actions.className = "actions";
      actions.appendChild(deleteBtn);
      li.appendChild(bookmarkURL);
      li.appendChild(deleteBtn);

      listEl.appendChild(li);
    });
  };
};

render();

// ---------------------------------------------------------------------------
// STEP 5: FUNCTION setStatus(message)
// - Create a function named setStatus(message)
// - Inside it: update statusEl to show the text of the message
// - Console hint: console.log the message so you can see status changes in DevTools

const setStatus = (message) => {
  statusEl.textContent = message;
  console.log(message);
};

setStatus("Didn't work");

// ---------------------------------------------------------------------------
// STEP 6: FUNCTION isValidUrl(url)
// - Create a function named isValidUrl(url)
// - Inside it: check if the url starts with "http://" or "https://"
// - Return true if valid, false otherwise
// - Console hint: console.log the url and the boolean result to verify your checker

// ---------------------------------------------------------------------------
// STEP 7: BUTTON HANDLERS
// - Add an event listener to addBtn
//     • Console hint: console.log that the add button was clicked
//     • Get values from titleInput and urlInput
//     • Console hint: console.log the values you read
//     • If url is invalid → call setStatus("Invalid URL") and stop
//     • Otherwise → loadBookmarks(), push a new object { title, url }, saveBookmarks(), clear inputs, call setStatus("Bookmark saved!"), and call render()
// - Add an event listener to showBtn
//     • Console hint: console.log that the show button was clicked
//     • Call render() and setStatus("Bookmarks loaded")
// - Add an event listener to removeKeyBtn
//     • Console hint: console.log that removeItem('bookmarks') is being called
//     • Call localStorage.removeItem("bookmarks"), then call render(), then call setStatus("'bookmarks' key removed")
// - Add an event listener to clearAllBtn
//     • Console hint: console.log that clear() is being called
//     • Call localStorage.clear(), then call render(), then call setStatus("All localStorage cleared")

// ---------------------------------------------------------------------------
// STEP 8: INITIAL CALL
// - At the very end of the file, call render() so saved bookmarks show up when the page loads
// - Console hint: console.log that initial render is running
