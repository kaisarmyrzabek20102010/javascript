async function async() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await response.json();
}
