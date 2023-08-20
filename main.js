import "./style.scss";

// Open Search Bar
document
  .querySelector(".search-wrapper .search-btn")
  .addEventListener("click", () => {
    document.querySelector(".nav-bottom").classList.add("search-open");
  });

// Close Search Bar
document
  .querySelector(".search-wrapper .close-icon")
  .addEventListener("click", () => {
    document.querySelector(".nav-bottom").classList.remove("search-open");
  });

// Megamenu Open & Close
let elements = document.getElementsByClassName("nav-item");

Array.from(elements).forEach((element) => {
  element.addEventListener("click", (e) => {
    element.parentElement.classList.toggle("mega-open");
  });
});
