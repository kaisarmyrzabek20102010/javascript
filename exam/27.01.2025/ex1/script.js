document.getElementById("fetchBtn").addEventListener("click", fetchData);

function fetchData() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "derek alynyda..";

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("qate");
      }
      return response.json();
    })
    .then((data) => {setTimeout(() => {
      
      messageElement.textContent = "tapsyrma alyndy";
      showRandomTask(data);
    }, 1000);
    })
    .catch((error) => {
      messageElement.textContent = `qate: ${error.message}`;
    });
}

function showRandomTask(tasks) {
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  document.getElementById(
    "message"
  ).textContent += ` tapsyrma: ${randomTask.title}`;
}
