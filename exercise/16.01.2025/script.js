async function FetchPosts() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    document.querySelector(".btn").addEventListener("click", () => {});
    if (!response.ok) {
      throw new Error("Postty aly mymkin bolmady");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log.error("Error", err);
  }
}
FetchPosts();
document.body.innerHTML = '<img id="qwerty"></img>';
let qwerty = document
  .getElementById("qwerty")

  .then((response) => response.json())
  .then((data) => {
    const img = document.createElement("img");
    img.src = data.message;
    const container = document.getElementById("imageDiv");
    container.innerHTML = "";
    container.appendChild(img);
  })
  .catch((error) => console.error("Error:", error));
