import { obtenerClimaActual, obtenerPronostico } from "../services/apiWeatherService.js";
import { analizarPronostico } from "../services/statsCalculator.js";
import { generarAlertas } from "../services/alertsService.js";
import { renderCard } from "../ui/renderService.js";
import { adaptarPronostico } from "../services/weatherAdapter.js";

export class WeatherApp {
  constructor() {
    this.ciudadesIniciales = ["Santiago", "Valparaiso", "Concepcion"];
    this.ciudadesCargadas= new Set();
    this.resultadoBox = document.getElementById("weatherResult");
    this.resultadoTexto = document.getElementById("weatherText");
    this.cerrarBtn = document.getElementById("closeResult");
    
    if (this.cerrarBtn) {
        this.cerrarBtn.addEventListener("click", () => {
            this.resultadoBox.classList.add("d-none");
       });
    }
  }

  async iniciar() {
    await Promise.all(
        this.ciudadesIniciales.map(ciudad => this.cargarCiudad(ciudad))
    );
  }

  async cargarCiudad(nombreCiudad) {
    try {
      const climaActual = await obtenerClimaActual(nombreCiudad);
      const pronosticoApi= await obtenerPronostico(nombreCiudad);
      const pronosticoAdaptado= adaptarPronostico(pronosticoApi);

      const datosProcesados = this.procesarDatos(climaActual);
      const stats = analizarPronostico(pronosticoAdaptado);
      const alertas = generarAlertas(datosProcesados, stats);
      const nombreNormalizado= datosProcesados.name.toLowerCase();

      if (!this.ciudadesCargadas.has(nombreNormalizado)) {
        console.log("Alertas generadas:", alertas);
        renderCard(datosProcesados, stats, alertas,pronosticoAdaptado);
        this.ciudadesCargadas.add(datosProcesados.name);
      }
      this.mostrarResultado(datosProcesados);     

    } catch (error) {
      console.error("Error cargando ciudad:", error.message);
      if (this.resultadoTexto && this.resultadoBox) {
        this.resultadoTexto.innerHTML = "❌ Ciudad no encontrada";
        this.resultadoBox.classList.remove("d-none");
      }
    }
  }

  procesarDatos(data) {
    return {
      name: data.name,
      temp: Math.round(data.main.temp),
      humedad: data.main.humidity,
      viento: Math.round(data.wind.speed * 3.6),
      estado: data.weather[0].description,
      estadoPrincipal: data.weather[0].main,
      icono: data.weather[0].icon
    };
  }

  mostrarResultado(ciudad) {
  if (!this.resultadoTexto || !this.resultadoBox) return;

  const html = `
    <strong>${ciudad.name}</strong><br>
    ${ciudad.icono} ${ciudad.temp}°C - ${ciudad.estado}<br>
    💧 Humedad: ${ciudad.humedad}%<br>
    🌬️ Viento: ${ciudad.viento} km/h
  `;

   this.resultadoTexto.innerHTML = html;
   this.resultadoBox.classList.remove("d-none");
 }

}