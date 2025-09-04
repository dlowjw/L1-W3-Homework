const themeBtn = document.getElementsByClassName("theme-button");
const body = document.getElementsByClassName("body");

const mobileMenuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

let isLight = false;
const themePref = localStorage.getItem("theme");
if (themePref === "light" && !body[0].classList.contains("light"))  {
  toggleTheme();
}

console.log(mobileMenuBtn);

themeBtn[0].addEventListener("click", toggleTheme);
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

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

function toggleMobileMenu() {
  mobileMenu.classList.toggle("visible");
}