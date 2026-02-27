🌦️ CloudSync – Weather App(API Version)

CloudSync es una aplicación web informativa del clima que permite consultar el estado meteorológico de distintas ciudades de Chile en tiempo real, mediante la integración con la API pública OpenWeather.

En esta actualización el poryecto evoluciona desde datos simulados(mock data) hacia consumo real de API, incorporando una arquitectura JavaScript modular basada en separación de responsabilidades(App/Services/UI).

El proyecto continúa utilizando SASS modular con metodología BEM y Bootstrap 5 como base visual, manteniendo un enfoque en buenas prácticas de frontend moderno.

🚀 Características principales:

🌍 Consulta en tiempo real del clima en ciudades populares de Chile
🧭 Información detallada por localidad:
- Temperatura 🌡️
- Humedad 💧
- Viento 🌬️
- Estado del clima (soleado, nublado, lluvioso, etc.)
🔍 Barra de búsqueda para consultar el clima por ciudad.
🧩 Cards dinámicas con detalles desplegables por localidad.
📊 Análisis del pronóstico semanal basado en datos reales:
   - Temperatura mínima, máxima y promedio.
   - Conteo de días soleados, nublados y lluviosos.
   - Resumen automático del clima semanal.
⚠️ Sistema automático de alertas climáticas.
🏞️ Imagen personalizada por ciudad + imagen default fallback.
⏳ Indicadores de estado (“Cargando…”)
❌ Manejo de errores al consultar la API
📱 Diseño responsive (mobile-first).
🎨 Interfaz moderna con una identidad visual coherente.
✉️ Sección de contacto con formulario de suscripción.
🧱 Arquitectura CSS modular con SASS + metodología BEM.
🧩 Arquitectura JavaScript modular (ES Modules).


🛠️ Tecnologías utilizadas:

- HTML5 - Estructura semántica del proyecto.
- SASS (SCSS)- Preprocesador CSS con arquitectura modular basada en partials y main.scss.
- Metodología BEM- Convención de nomenclatura CSS para estilos escalables y mantenibles.
- Bootstrap 5 - Framework CSS utilizado para el sistema de grid responsive y componentes base.
- JavaScript (ES6) -Lógica de la aplicación, manipulación del DOM y análisis de datos climáticos.
- JavaScript Modules (ES Modules) Organización modular del código JavaScript (import/export).
- Fetch API.
- jQuery - Interacciones simples con componentes Bootstrap(modal).
- Git & GitHub - Control de versiones y trabajo con ramas para refactorización progresiva.

🌐API utilizada
- Se integra la API pública:
- OpenWeather API
- Documentación oficial: https://openweathermap.org/api
- Base URL utilizada: https://api.openweathermap.org/data/2.5
- Endpoints implementados:
• /weather → Clima actual
• /forecast → Pronóstico de 5 días
- La información se solicita en:
• Unidades métricas(units=metric)
• Idioma español(lang=es)
• País Chile(CL)

🧠¿Qué clase se implemento?

Se implemento como clase unica WeatherApp, la cual es el núcleo de la aplicación. Esta tiene como responsabilidad :
 - Coordinar el flujo general.
 - Llamar a la API.
 - Procesar datos.
 - Calcular estadísticas.
 - Generar Alertas.
 - Coontrolar estados de UI(cargando/error).
 - Evitar renderizar ciudades duplicadas.
Actua como controlador principal de la app.

📊 ¿Cómo se calculan las estadísticas?

- En esta versión las estadísticas ya no se basan en mock data.
- El flujo es:
   • Se consulta /forecast
   • Se adapta la estructura de datos
   • Se calcula:
      - Temperatura mínima semanal
      - Temperatura máxima semanal
      - Promedio general
      - Conteo de tipos de clima
      - Resumen automático (“Semana mayormente Soleada”, etc.)
- Todo basado en datos reales entregados por OpenWeather.
 

📁Estructura del Proyecto:

MVPCLIMA/
│
├── index.html
│
├── assets/
│   ├── css/
│   │   ├── main.css
|   |   └── main.css.map
│   │
│   ├── icons/
│   │   └── favicon.ico
│   │
│   ├── img/
│   │   └── (imágenes del proyecto)
│   │
│   ├── js/
|   |   ├── app/
|   |   |   └── weatherApp.js
|   |   |
|   |   ├── services/
|   |   |   ├── alertsService.js
│   │   |   ├── apiWeatherService.js
|   |   |   ├── cityImages.js
|   |   |   ├── statsCalculator.js
|   |   |   └── weatherAdapter.js
│   |   | 
|   |   ├── ui/
│   │   |   └── renderService.js
|   |   |
│   │   └── main.js
|   |
|   |
│   └── scss/
│       ├── abstracts/
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       │
│       ├── base/
│       │   ├── _reset.scss
│       │   └── _typography.scss
│       │
|       ├── components/
│       │   ├── _modal.scss
│       │   ├── _weather-card.scss
│       │   └── _weather-search.scss
|       |
│       ├── layout/
│       │   ├── _navbar.scss
│       │   ├── _hero.scss
│       │   ├── _about.scss
│       │   ├── _location.scss
│       │   ├── _contact.scss
│       │   └── _footer.scss
│       │
│       └── main.scss
│
└── README.md


🔗 Repositorio

Repositorio público:

https://github.com/JavieraLoy/weather-frontend-m2

(Rama actual: feature-integracion-api)

⚙️Instalación y Uso:

1- Clona el Respositorio:

git clone https://github.com/JavieraLoy/weather-frontend-m2.git

2-Ingresa al proyecto:

cd MVPCLIMA

3-Cambiar a la rama de refactorización:

git checkout feature-integracion-api

4-Abre el archivo index.html en tu navegador.


👩‍💻 Autor
Desarrollado por JavieraLoy 
Proyecto de práctica y aprendizaje en desarrollo web frontend moderno, enfocado en arquitectura modular, consumo de APIs y buenas prácticas de organización de código.