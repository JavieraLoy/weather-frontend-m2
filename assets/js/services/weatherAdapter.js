function traducirEstado(apiMain) {
    const mapa = {
        "Clear": "Soleado",
        "Clouds": "Nublado",
        "Rain": "Lluvioso",
        "Drizzle": "Chubascos",
        "Thunderstorm": "Tormenta Electrica",
        "Wind": "Ventoso"
    };

    return mapa[apiMain] || "Otro";
}
function obtenerEstadoMasFrecuente(estados) {
    const conteo = {};

    estados.forEach(e => {
        conteo[e] = (conteo[e] || 0) + 1;
    });

    return Object.keys(conteo).reduce((a, b) =>
        conteo[a] > conteo[b] ? a : b
    );
}

export function adaptarPronostico(apiData) {
    const agrupadoPorDia= {};

    apiData.list.forEach(item => {

        const fecha = new Date(item.dt * 1000)
            .toISOString()
            .split("T")[0]; 

        if (!agrupadoPorDia[fecha]) {
            agrupadoPorDia[fecha] = {
                min: item.main.temp_min,
                max: item.main.temp_max,
                estados: []
            };
        }

        agrupadoPorDia[fecha].min = Math.min(
            agrupadoPorDia[fecha].min,
            item.main.temp_min
        );

        agrupadoPorDia[fecha].max = Math.max(
            agrupadoPorDia[fecha].max,
            item.main.temp_max
        );

        agrupadoPorDia[fecha].estados.push(
            item.weather[0].main
        );
    });
   
    return Object.entries(agrupadoPorDia)
        .slice(0, 5) 
        .map(([fecha, datos]) => {

            const estadoFrecuente = obtenerEstadoMasFrecuente(datos.estados);

            return {
                dia: new Date(fecha)
                    .toLocaleDateString("es-CL", { weekday: "long" }),
                min: Math.round(datos.min),
                max: Math.round(datos.max),
                estado: traducirEstado(estadoFrecuente)
            };
        });
}

