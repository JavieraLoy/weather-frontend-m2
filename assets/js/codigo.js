function buscarClima() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "29a7f1e89596eb44b2c21cd07df4fdcc";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      const weather = data.weather[0].main;

      updateBackground(weather);

      document.getElementById("resultado").innerHTML = 
      ` <h3>${data.name}</h3>
        <p>Temp: ${data.main.temp}°C</p>
        <p>Clima: ${weather}</p>
      `;
    });
}
function updateBackground(weather) {
  const body = document.body;
  body.className = ""; // limpiar clases previas

  if (weather === "Clear") {
    body.classList.add("clear-sky");
  } else if (weather === "Clouds") {
    body.classList.add("cloudy");
  } else if (weather === "Rain" || weather === "Drizzle") {
    body.classList.add("rainy");
  } else if (weather === "Thunderstorm") {
    body.classList.add("storm");
  } else if (weather === "Snow") {
    body.classList.add("snow");
  } else {
    body.classList.add("sunny");
  }
}