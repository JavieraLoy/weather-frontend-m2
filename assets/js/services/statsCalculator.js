
export function analizarPronostico(pronosticoSemanal) {

    if (!pronosticoSemanal || pronosticoSemanal.length === 0) {
        return null;
    }

    let tempMin = pronosticoSemanal[0].min;
    let tempMax = pronosticoSemanal[0].max;

    let sumaTemp = 0;
    let totalTemp = 0;

    let diasSoleados = 0;
    let diasNublados = 0;
    let diasLluviosos = 0;
    let diasOtros = 0;

    for (let i = 0; i < pronosticoSemanal.length; i++) {

        const dia = pronosticoSemanal[i];

        if (dia.min < tempMin) tempMin = dia.min;
        if (dia.max > tempMax) tempMax = dia.max;

        sumaTemp += dia.min + dia.max;
        totalTemp += 2;

        if (dia.estado === "Soleado") {
            diasSoleados++;
        } else if (dia.estado === "Nublado" || dia.estado === "Parcialmente Nublado") {
            diasNublados++;
        } else if (dia.estado === "Lluvioso" || dia.estado === "Chubascos") {
            diasLluviosos++;
        } else {
            diasOtros++;
        }
    }

    const promedio = (sumaTemp / totalTemp).toFixed(1);

    let resumen = "";

    if (diasSoleados > diasNublados && diasSoleados > diasLluviosos) {
        resumen = "Semana mayormente Soleada ☀️";
    } else if (diasNublados > diasSoleados && diasNublados > diasLluviosos) {
        resumen = "Semana mayormente Nublada ☁️";
    } else if (diasLluviosos > diasSoleados && diasLluviosos > diasNublados) {
        resumen = "Semana mayormente Lluviosa 🌧️";
    } else {
        resumen = "Semana con clima variable ⛅";
    }

    return {
        tempMin,
        tempMax,
        promedio,
        diasSoleados,
        diasNublados,
        diasLluviosos,
        diasOtros,
        resumen
    };
}
