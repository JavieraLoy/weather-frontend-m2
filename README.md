🌦️ CloudSync – Weather App

CloudSync es una aplicación web informativa del clima que permite consultar el estado meteorológico de distintas ciudades de Chile de forma clara, visual y amigable.
Este proyecto fue refactorizado para mejorar su escalabilidad, mantenibilidad y arquitectura frontend, incorporando:

• SASS con arquitectura modular (partials y main) para la organización de estilos.

• Metodología BEM (Block, Element, Modifier) para una nomenclatura CSS consistente y escalable.

• Bootstrap 5 como framework base, aprovechando su sistema de grid responsive y componentes UI.

Además, se implementó lógica en JavaScript modular (ES Modules) para simular datos climáticos y generar contenido dinámico en la interfaz, aplicando variables, ciclos, condicionales y funciones para la búsqueda de ciudades, análisis estadístico del pronóstico semanal (mínimo, máximo, promedio y conteo de estados climáticos), y renderizado dinámico de tarjetas de información meteorológica en el DOM.
 
El proyecto está desarrollado como un MVP (Minimun Viable Product) enfocado en buenas prácticas de frontend moderno.

🚀 Características principales:

🌍 Visualización del clima en ciudades populares de Chile
🧭 Información detallada por localidad:
- Temperatura 🌡️
- Humedad 💧
- Viento 🌬️
- Estado del clima (soleado, nublado, lluvioso, etc.)
🔍 Barra de búsqueda para consultar el clima por ciudad.
🧩 Cards dinámicas con detalles desplegables por localidad.
🧪 Datos climáticos simulados mediante mock data (preparado para futura integración con API real).
📊 Análisis del pronóstico semanal con:
   - Temperatura mínima, máxima y promedio.
   - Conteo de días soleados, nublados y lluviosos.
   - Resumen automático del clima semanal.
⚙️ Renderizado dinámico del contenido mediante JavaScript.
📱 Diseño responsive (mobile-first).
🎨 Interfaz moderna con una identidad visual coherente.
✉️ Sección de contacto con formulario de suscripción.
🧱 Arquitectura CSS modular con SASS + metodología BEM.
🧩 Arquitectura JavaScript modular (ES Modules).


🛠️ Tecnologías utilizadas:

HTML5 - Estructura semántica del proyecto.
SASS (SCSS)- Preprocesador CSS con arquitectura modular basada en partials y main.scss.
Metodología BEM- Convención de nomenclatura CSS para estilos escalables y mantenibles.
Bootstrap 5 - Framework CSS utilizado para el sistema de grid responsive y componentes base.
JavaScript (ES6) -Lógica de la aplicación, manipulación del DOM y análisis de datos climáticos simulados.
JavaScript Modules (ES Modules) Organización modular del código JavaScript (import/export).
jQuery - Interacciones simples con componentes Bootstrap(modal).
Git & GitHub - Control de versiones y trabajo con ramas para refactorización progresiva.


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
|   |   ├── data/
|   |   |   └── mockWeather.js
|   |   |
|   |   ├── services/
|   |   |   └── weatherService.js
│   │   |
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


⚙️Instalación y Uso:

1- Clona el Respositorio:

git clone https://github.com/JavieraLoy/weather-frontend-m2.git

2-Ingresa al proyecto:

cd MVPCLIMA

3-Cambiar a la rama de refactorización:

git checkout update-proyecto-logica-js

4-Abre el archivo index.html en tu navegador.

🧠 Funcionamiento del clima:

Actualmente, el proyecto utiliza datos simulados (mock data) definidos en JavaScript para representar la información climatica  de distintas ciudades.
Se implementa lógica de análisis mediante variables, ciclos y condicionales para calcular estadísticas de pronóstico semanal (mínimo, máximo, promedio y resumen climático).
La arquitectura está preparada para una futura integración con una API real de clima (por ejemplo OpenWeather), reemplazando los datos simulados.

👩‍💻 Autor
Desarrollado por JavieraLoy 
Proyecto de práctica y aprendizaje en desarrollo web frontend con enfoque en arquitectura CSS moderna.