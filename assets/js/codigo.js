const weatherData = {
  santiago: {
    temp: "18°C",
    humidity: "65%",
    wind: "12 km/h"
  },
  iquique: {
    temp: "24°C",
    humidity: "68%",
    wind: "18 km/h"
  },
  antofagasta: {
    temp: "24°C",
    humidity: "40%",
    wind: "18 km/h"
  },
  calama: {
    temp: "26°C",
    humidity: "20%",
    wind: "15 km/h"
  },
  la_serena: {
    temp: "19°C",
    humidity: "68%",
    wind: "14 km/h"
  },
  vina_del_mar: {
    temp: "18°C",
    humidity: "75%",
    wind: "16 km/h"
  },
  valparaiso: {
    temp: "16°C",
    humidity: "78%",
    wind: "18 km/h"
  },
  concepcion: {
    temp: "14°C",
    humidity: "85%",
    wind: "18 km/h"
  },
  valdivia: {
    temp: "14°C",
    humidity: "85%",
    wind: "18 km/h"
  },
  punta_arenas: {
    temp: "7°C",
    humidity: "80%",
    wind: "45 km/h"
  }
 
};

const input = document.getElementById("cityInput");
const btn = document.getElementById("searchBtn");
const result = document.getElementById("weatherResult");
const text = document.getElementById("weatherText");
const closeBtn = document.getElementById("closeResult");

btn.addEventListener("click", showWeather);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") showWeather();
});

closeBtn.addEventListener("click", () => {
  result.classList.add("d-none");
});

function normalizeCityName(city) {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
}
function showWeather() {
  const city = normalizeCityName(input.value.trim());

  if (!weatherData[city]) {
    result.classList.add("d-none");
    return;
  }
  const data = weatherData[city];

  text.innerHTML = `
    <strong>${city.toUpperCase()}</strong><br>
    🌡️ Temperatura: ${data.temp}<br>
    💧 Humedad: ${data.humidity}<br>
    💨 Viento: ${data.wind}
  `;

  result.classList.remove("d-none");
}

/*despliegue del modal*/

$(document).ready(function () {
  $("#subscribeForm").on("submit", function (e) {
    e.preventDefault(); 

    const modal = new bootstrap.Modal(
      document.getElementById("thanksModal")
    );

    modal.show();
    this.reset();
  });
});



 

















