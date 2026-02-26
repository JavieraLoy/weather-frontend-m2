import { cityImages } from "../services/cityImages.js";
const container = document.getElementById("weatherCardsContainer");


export function renderCard(ciudad, stats, alertas, pronostico = []) {

  if (!container) return;

  const cardId = `card-${ciudad.name.replace(/\s/g, "")}`;
  const collapseId= `detalle-${cardId}`;
  const imageUrl= cityImages[ciudad.name] || "/assets/img/default-weather.png";
  const alertasHTML = alertas.length > 0
    ? `
      <div class="mt-2 p-2">
        <strong>⚠️ Alertas:</strong>
        <ul class="small text-danger">
          ${alertas.map(a => `<li>${a}</li>`).join("")}
        </ul>
      </div>
    `
    : "";

  const pronosticoHTML = pronostico.length > 0
    ? `
      <div class="mt-2 p-2 text-start small">
        <strong>Pronóstico semanal</strong>
        <ul class="mt-1">
          ${pronostico.map(dia => `
            <li>
              ${dia.dia}: ${dia.estado} 
              (Max: ${dia.max}°C / Min: ${dia.min}°C)
            </li>
          `).join("")}
        </ul>
      </div>
    `
    : "";
  

  const cardHTML = `
      <div class="weather-card  shadow-sm">
        <img src="${imageUrl}"  class="weather-card__image" alt="${ciudad.name}">
        <div class="weather-card__body">
          <h5 class="weather-card__title">${ciudad.name}</h5>
          <p class="weather-card__summary">
            🌡️ <strong>${ciudad.temp}°C</strong> - ${ciudad.estado}
          </p>

          <p class="weather-card__summary text-primary">
            📊 ${stats.resumen}
          </p>

          <button 
            class="btn btn-outline-primary btn-sm weather-card__btn"
            data-bs-toggle="collapse"
            data-bs-target="#${collapseId}">
            Detalle de localidad
          </button>
        </div>

        <div class="collapse weather-card__details" id="${collapseId}">
          
          <ul class="list-group list-group-flush text-start small weather-card__list">
            <li class="list-group-item">
              🌡️ Temp actual: ${ciudad.temp}°C
            </li>
            <li class="list-group-item">
              💧 Humedad: ${ciudad.humedad}%
            </li>
            <li class="list-group-item">
              🌬️ Viento: ${ciudad.viento} km/h
            </li>
            <li class="list-group-item">
              📉 Mín semanal: ${stats.tempMin}°C
            </li>
            <li class="list-group-item">
              📈 Máx semanal: ${stats.tempMax}°C
            </li>
            <li class="list-group-item">
              📊 Promedio: ${stats.promedio}°C
            </li>
          </ul>

          ${alertasHTML}

          ${pronosticoHTML}

        </div>
      </div>
  `;
  const fullCardHTML = `
   <div id="${cardId}" class="col-lg-4 col-md-6 mb-3">
      ${cardHTML}
   </div>
  `;

  const existeCard= document.getElementById(cardId);
  if(existeCard){
    existeCard.innerHTML= cardHTML;
  }else{
    container.insertAdjacentHTML("beforeend", fullCardHTML);
  }
}
