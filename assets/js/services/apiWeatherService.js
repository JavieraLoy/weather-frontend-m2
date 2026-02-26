
const API_KEY = "29a7f1e89596eb44b2c21cd07df4fdcc";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function obtenerClimaActual(ciudad) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${ciudad},CL&appid=${API_KEY}&units=metric&lang=es`
  );

  if (!response.ok) throw new Error("Error clima actual");

  return await response.json();
}

export async function obtenerPronostico(ciudad) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${ciudad},CL&appid=${API_KEY}&units=metric&lang=es`
  );

  if (!response.ok) throw new Error("Error pronóstico");

  return await response.json();

}