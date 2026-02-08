🌦️ CloudSync – Weather App

CloudSync es una aplicación web informativa del clima que permite consultar el estado meteorológico de distintas ciudades de Chile de forma clara, visual y amigable.
Este proyecto fue refactorizado para mejorar su escalabilidad, mantenibilidad y arquitectura CSS, incorporando SASS con partials y la metodología BEM para gestionar los estilos personalizados, manteniendo Bootstrap 5 como framework base, el cual proporciona un sistema de grid robusto y responsive. 
El proyecto está desarrollado como un MVP (Minimun Viable Product) enfocado en buenas prácticas de frontend moderno.

🚀 Características principales:

🌍 Visualización del clima en ciudades populares de Chile
🧭 Información detallada por localidad:
Temperatura 🌡️
Humedad 💧
Viento 🌬️
Estado del clima (soleado, nublado, lluvioso, etc.)
🔍 Barra de búsqueda para consultar el clima por ciudad.
🧩 Cards dinámicas con detalles desplegables.
📱 Diseño responsive (mobile-first).
🎨 Interfaz moderna con una identidad visual coherente.
✉️ Sección de contacto con formulario de suscripción.
🧱 Arquitectura CSS modular con SASS + BEM.

🛠️ Tecnologías utilizadas:

HTML5 - Estructura semántica.
SASS (SCSS)- Preprocesador CSS con partials y arquitectura modular.
Metodología BEM- Organización de clases escalables.
Bootstrap 5 - Grid system, utilidades y componentes base.
JavaScript (ES6) -Lógica de datos climáticos.
jQuery - Interacciones simples (modal)
Git & GitHub - Control de versiones.


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
│   │   └── codigo.js
│   │
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

git checkout update-proyecto

4-Abre el archivo index.html en tu navegador.

🧠 Funcionamiento del clima:

Actualmente, el proyecto utiliza datos simulados (mock data) definidos en JavaScript para representar el clima de distintas ciudades.
La arquitectura está preparada para una futura integración con una API real de clima (por ejemplo OpenWeather).

👩‍💻 Autor
Desarrollado por JavieraLoy 
Proyecto de práctica y aprendizaje en desarrollo web frontend con enfoque en arquitectura CSS moderna.