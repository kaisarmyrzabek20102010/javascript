const age = document.getElementById("age");
const names = document.getElementById("names");
const qorsetyButton = document.getElementById("qorsety");
const saqtayButton = document.getElementById("saqtay");
const clearButton = document.getElementById("clear");

function saqtay() {
  saqtayButton.addEventListener("click", () => {
    localStorage.setItem("age", age.value);
    localStorage.setItem("names", names.value);
  });
}

function clear() {
  clearButton.addEventListener("click", () => {
    localStorage.clear();
  });
}

function qorsety() {
  qorsetyButton.addEventListener("click", () => {
    alert(
      `Name: ${localStorage.getItem("names")} age: ${localStorage.getItem(
        "age"
      )}`
    );
  });
}

saqtay();
clear();
qorsety();
