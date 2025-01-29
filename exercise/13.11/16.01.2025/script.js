async function FetchPosts() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {});
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
document.body.innerHTML = '<ul><li id="qwerty"></li></ul>';
let qwerty = document.getElementById("qwerty")

  .then((response) => response.json())
  .then((data) => {
    const img = document.createElement("img");
    img.src = data.message;
    const container = document.getElementById("imageDiv");
    container.innerHTML = "";
    container.appendChild(img);
  })
  .catch((error) => console.error("Error:", error));
