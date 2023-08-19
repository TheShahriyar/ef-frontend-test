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
