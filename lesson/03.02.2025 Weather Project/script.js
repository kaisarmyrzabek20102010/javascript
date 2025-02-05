const input = document.getElementById("input");
const button = document.getElementById("button");
const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";

async function fetchWeather(qala) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${qala}&appid=${apiKey}&units=metric&lang=kk`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("ауа райы қате");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("қате:", error);
    alert("табылмады");
  }
}

function displayWeather(data) {
  const weather = document.getElementById("weather");
  weather.innerHTML = `
  <div class="weather">
    <h2>аты: ${data.name}</h2><br>
    <p>Температура: ${data.main.temp}°C</p><br>
    <p>ауа райы: ${data.weather[0].description}</p><br>
    <p>ылғалдылық: ${data.main.humidity}%</p><br>
    <p>жел жылдамдығы: ${data.wind.speed} м/с</p><br>
    </div>        
  `;
}

button.addEventListener("click", () => {
  const qala = input.value;
  fetchWeather(qala);
  if (response.ok) {
    localStorage.setItem("aya", qala);
  } 
});

setTimeout(() => {
  const aya = localStorage.getItem("aya");
  alert(aya);
}, 3000);
