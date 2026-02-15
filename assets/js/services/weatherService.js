import { locationData } from "../data/mockWeather.js";
//obtener clima según nombre y id
export function obtenerClima(busqueda) {
    if(!busqueda) return null;

    const texto= busqueda.toString().toLowerCase();

    return locationData.find(
        l => l.name.toLowerCase() === texto ||
        l.id.toLowerCase() === texto
    ) || null;
}

//función para analizar el pronostico
export function analizarPronostico(pronosticoSemanal){
    //variables intermedias
    let tempMin= pronosticoSemanal[0].min;
    let tempMax= pronosticoSemanal[0].max;
    let sumaTemp= 0;
    let totalTemp=0;

    let diasSoleados= 0;
    let diasNublados= 0;
    let diasLluviosos= 0;
    let diasOtros= 0;

    //ciclo For para iterar en la temperatura min y max del pronostico Semanal
    for(let i= 0; i < pronosticoSemanal.length; i++){
        let dia = pronosticoSemanal[i];
        if(dia.min < tempMin){
            tempMin = dia.min;
        }
        if(dia.max > tempMax){
            tempMax = dia.max;
        }
        //Promedio
        sumaTemp += dia.min + dia.max;
        totalTemp += 2;

        //Condicionales para estado del clima
        if(dia.estado === "Soleado"){
            diasSoleados++;
        }else if(dia.estado === "Nublado" || dia.estado === "Parcialmente Nublado"){
            diasNublados++;
        }else if(dia.estado === "Lluvioso" || dia.estado === "Chubascos"){
            diasLluviosos++;
        }else{
            diasOtros++;
        }
    }
    //variable para el promedio de temperatura
    let promedio= sumaTemp / totalTemp;

    //condicional para resumen semanal
    let resumen= "";

    if(diasSoleados > diasLluviosos && diasSoleados > diasNublados){
        resumen= "Semana mayormente Soleada ☀️";
    }else if(diasNublados > diasSoleados && diasNublados > diasLluviosos){
        resumen= "Semana mayormente Nublada ☁️";
    }else if(diasLluviosos > diasSoleados && diasLluviosos > diasNublados){
        resumen= "Semana mayormente Lluviosa 🌧️";
    }else{
        resumen ="Semana con clima variable ⛅";
    }
    //retorno de datos
    return{
        tempMin,
        tempMax,
        promedio: promedio.toFixed(1),
        diasSoleados,
        diasNublados,
        diasLluviosos,
        diasOtros,
        resumen
    };
}