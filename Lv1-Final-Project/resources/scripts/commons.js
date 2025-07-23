const themeBtn = document.getElementsByClassName("theme-button");
const body = document.getElementsByClassName("body");

let isLight = false;
const themePref = localStorage.getItem("theme");
if (themePref === "light" && !body[0].classList.contains("light"))  {
  toggleTheme();
}

themeBtn[0].addEventListener("click", toggleTheme);

function toggleTheme() {
  body[0].classList.toggle("light");
  isLight = !isLight;

  if (isLight) {
    themeBtn[0].textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
  else {
    themeBtn[0].textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}