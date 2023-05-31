console.log("hi");

// variable for the toggle btn
const menuButton = document.querySelector(".menu-toggle");

// variable for the nav element
const nav = document.querySelector("nav");

// function, which listens for user to click menu btn
// when user clicks btn, add the 'open' class to nav element (el)

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});
