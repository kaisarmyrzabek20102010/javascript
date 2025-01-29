const save = document.getElementById("save");
const tazalay = document.getElementById("clean");
const color = document.getElementById("color");

tazalay.addEventListener("click", () => {
  sessionStorage.setItem("text", color.value);
});
