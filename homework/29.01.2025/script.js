const colorPicker = document.getElementById("color");
const save = document.getElementById("save");
const clearButton = document.getElementById("clean");

window.onload = () => {
  const savedColor = sessionStorage.getItem("selectedColor");
  if (savedColor) {
    colorPicker.value = savedColor;
    document.body.style.backgroundColor = savedColor;
  }
};

save.addEventListener("click", () => {
  const selectedColor = colorPicker.value;
  sessionStorage.setItem("selectedColor", selectedColor);
  document.body.style.backgroundColor = selectedColor;
});

clearButton.addEventListener("click", () => {
  sessionStorage.removeItem("selectedColor");
  document.body.style.backgroundColor = "";
  colorPicker.value = "#ffffff";
});
