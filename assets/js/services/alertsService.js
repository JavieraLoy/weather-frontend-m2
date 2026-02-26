export function generarAlertas(ciudad, stats) {
  const alertas = [];

  if (ciudad.temp >= 26) {
    alertas.push("🔥 Alerta de altas temperaturas");
  }
  if(ciudad.temp <= 8){
    alertas.push("🥶 Riesgo de bajas temperaturas");
  }

  if (stats.diasLluviosos >= 2) {
    alertas.push("🌧️ Alta probabilidad de lluvias esta semana");
  }

  if (ciudad.viento >= 25) {
    alertas.push("🌬️ Vientos moderados a fuertes detectados");
  }

  if (stats.promedio > 25) {
    alertas.push("☀️ Semana calurosa en general");
  }

  return alertas;
}
