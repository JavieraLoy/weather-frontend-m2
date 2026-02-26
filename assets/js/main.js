import { WeatherApp } from "./app/weatherApp.js";

const app = new WeatherApp();
app.iniciar();

const input = document.getElementById("cityInput");
const btnBuscar = document.getElementById("searchBtn");

btnBuscar.addEventListener("click", async () => {
  const ciudad = input.value.trim();
  if (!ciudad) return;

  await app.cargarCiudad(ciudad);
});

input.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const ciudad = input.value.trim();
    if (!ciudad) return;

    await app.cargarCiudad(ciudad);
  }
});
