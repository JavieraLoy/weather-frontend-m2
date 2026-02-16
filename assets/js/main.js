import { locationData } from "./data/mockWeather.js";
import { obtenerClima, obtenerIconoActual, renderPronostico } from "./services/weatherService.js";
import { analizarPronostico } from "./services/weatherService.js";

//---------------- BUSCADOR DEL CLIMA ----------------------
const input= document.getElementById("cityInput");
const btnBuscar= document.getElementById("searchBtn");
const resultadoBox= document.getElementById("weatherResult");
const resultadoTexto= document.getElementById("weatherText");
const cerrarBtn= document.getElementById("closeResult");

//evento buscar
btnBuscar.addEventListener("click", buscarCiudad);
input.addEventListener("keypress", e => {
    if(e.key === "Enter") buscarCiudad();
});
function buscarCiudad(){
    const ciudad =input.value.trim();
    if(ciudad === ""){
        mostrarResultado("⚠️ Ingrese una ciudad");
        return;
    }

    const datos= obtenerClima(ciudad);
    if(!datos){
        mostrarResultado(`❌ Ciudad "${ciudad}" no encontrada`);
        return;
    }
    //despliegue de resultados
    const icono= obtenerIconoActual(datos.estadoActual);
    const texto= `
      <strong>${datos.name}</strong><br>
      ${icono} ${datos.temp}°C - ${datos.estadoActual}<br>
      💧 Humedad: ${datos.humidity}%<br>
      🌬️ Viento: ${datos.wind} Km/h
    `;
    mostrarResultado(texto); 
}
//mostrar panel flotante
function mostrarResultado(html){
    resultadoTexto.innerHTML = html;
    resultadoBox.classList.remove("d-none");
}
//cerrar panel flotante
cerrarBtn.addEventListener("click", ()=>{
    resultadoBox.classList.add("d-none");
});

//------------- INFORMACION DE LAS CARDS -------------------

const container= document.getElementById("weatherCardsContainer");

//función para crear las cards.
function crearWeatherCard(ciudad){
    const iconoActual= obtenerIconoActual(ciudad.estadoActual);
    const stats= analizarPronostico(ciudad.pronosticoSemanal);

    return `
    <div class="col-lg-4 col-md-6">
     <div class="weather-card h-100">
        <img src="${ciudad.imagen}" class="weather-card__image" alt="${ciudad.name}">
        <div class="weather-card__body">
          <h5 class="weather-card__title">${ciudad.name}</h5>
          <p class="weather-card__summary">
            ${iconoActual} <strong>${ciudad.temp}°C</strong> · ${ciudad.estadoActual}
          </p>
          <p class="weather-card__summary text-primary">
            📊 ${stats.resumen}
          </p>

          <button class="btn btn-outline-primary btn-sm weather-card__btn"
            data-bs-toggle="collapse" 
            data-bs-target="#detalle-${ciudad.id}"> Detalle de localidad
          </button>

          <div class="collapse weather-card__details" id="detalle-${ciudad.id}">
             <ul class="list-group list-group-flush text-start small weather-card__list">
               <li class="list-group-item">🌡️ Temp actual: ${ciudad.temp}°C</li>
               <li class="list-group-item">💧 Humedad: ${ciudad.humidity}%</li>
               <li class="list-group-item">🌬️ Viento: ${ciudad.wind} km/h</li>
               <li class="list-group-item">📉 Mín semanal: ${stats.tempMin}°C</li>
               <li class="list-group-item">📈 Máx semanal: ${stats.tempMax}°C</li>
               <li class="list-group-item">📊 Promedio: ${stats.promedio}°C</li>
             </ul>

             <div class="mt-2 text-start small">
               <strong>Pronóstico semanal</strong>
               <ul class="mt-1">
                 ${renderPronostico(ciudad.pronosticoSemanal)}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>  
    `;
}
//función para mostrar información del clima en las cards.
function renderizarCards(){
    container.innerHTML= "";

    locationData.forEach(ciudad => {
        container.innerHTML += crearWeatherCard(ciudad);
    });
}
renderizarCards();
