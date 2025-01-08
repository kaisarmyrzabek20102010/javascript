const buttons = document.querySelectorAll("button");
const ekran = document.getElementById("ekran");
let output = "";

function calculate(btnvalue) {
  if (btnvalue == "=" && output != "") {
    output = eval(output);
  } else if (btnvalue == "C") {
    output = "";
  } else if (btnvalue == "+/-") {
    btnvalue.togle;
  } else if (btnvalue == "del") {
  } else {
    output += btnvalue;
  }

  ekran.value = output;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", (knopka) => {
    console.log(knopka.target.dataset.value);

    calculate(knopka.target.dataset.value);
  });
}); 