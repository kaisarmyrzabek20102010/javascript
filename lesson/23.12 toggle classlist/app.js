const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  button.classList.add("padding");
  text.classList.remove("text");
});

button.addEventListener("dblclick", () => {
  button.classList.add("center");
});

const toggle = document.getElementById("toggle");
const description = document.getElementById("description");

toggle.addEventListener("click", () => {
  description.classList.toggle("hide");
});

const searchinput = document.createElement("searchinput");
const searchbutton = document.createElement("search");

searchbutton.addEventListener("click", () => {
  searchinput.classList.toggle("search-2");
});