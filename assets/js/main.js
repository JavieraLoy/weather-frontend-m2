import { obtenerClima } from "./services/weatherService.js";
import { analizarPronostico } from "./services/weatherService.js";

const ciudad= obtenerClima("Santiago");
const estadisticas= analizarPronostico(ciudad.pronosticoSemanal);

console.log(estadisticas);