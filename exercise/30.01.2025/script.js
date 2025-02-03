async function fetchData() {
  try {
    const response = await fetch(
      "https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films"
    );
    if (!response.ok) {
      throw new Error("qate");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

const clear = document.getElementById("clear");
const qosy = document.getElementById("qosy");

qosy.addEventListener("click", () => {
  const div = document.querySelector(".div");
  div.classList.toggle("visibility");
});

clear.addEventListener("click", () => {
  const div = document.querySelector(".div");
  div.classList.remove("visibility");
});

fetchData();
