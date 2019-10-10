var nightModeToggleButton = document.querySelector(".nightmode");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var row = document.querySelector(".row-parent");
var body = document.querySelector("body");

nightModeToggleButton.onclick = function() {
  nightModeToggleButton.classList.toggle("night-mode");
  body.classList.toggle("night-mode");
  row.classList.toggle("night-mode");
  h1.classList.toggle("night-mode");
  img.classList.toggle("night-mode");
};
