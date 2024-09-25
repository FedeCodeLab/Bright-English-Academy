Bright English Academy - Landing Page
Este proyecto es una landing page creada como parte de una práctica de desarrollo web utilizando React y Vite. La landing page está diseñada para una academia de inglés ficticia llamada "Bright English Academy", con el objetivo de poner en práctica habilidades relacionadas con React Router, Vite, y despliegue en Vercel.

Descripción
La landing page permite a los usuarios navegar por diferentes secciones como la página principal, información sobre los profesores, y la página "Acerca de Nosotros". Es un proyecto sencillo que tiene como propósito la práctica del enrutamiento, despliegue y diseño de componentes.

Funcionalidades
Página Principal: Incluye un héroe principal con un mensaje de bienvenida y botones para explorar más.
Sección de Profesores: Muestra una lista de profesores con descripciones detalladas.
Acerca de Nosotros: Explica la misión y visión de la academia.
404 Not Found: Muestra un mensaje de error personalizado cuando el usuario accede a una ruta no existente.
Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir la interfaz de usuario.
Vite: Herramienta de construcción rápida para proyectos web modernos.
React Router: Biblioteca de enrutamiento para manejar la navegación entre páginas.
Tailwind CSS: Framework de CSS para crear estilos de manera eficiente.
Vercel: Plataforma de despliegue para aplicaciones web front-end.
Estructura del Proyecto
bash
Copiar código
.
├── public
│   └── images
├── src
│   ├── components
│   │   ├── Hero.jsx
│   │   ├── Cards.jsx
│   │   ├── LittleAbout.jsx
│   │   └── Opinions.jsx
│   ├── views
│   │   ├── Professors.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
Instalación y Configuración
Clona el repositorio en tu máquina local:

bash
Copiar código
git clone https://github.com/tuusuario/nombre-del-repositorio.git
Navega a la carpeta del proyecto:

bash
Copiar código
cd nombre-del-repositorio
Instala las dependencias:

bash
Copiar código
npm install
Inicia el servidor de desarrollo:

bash
Copiar código
npm run dev
Abre tu navegador y ve a http://localhost:5173 para ver el proyecto.

Despliegue
El proyecto está desplegado en Vercel y puede ser accesado en el siguiente enlace:

[Bright English Academy - Landing Page](https://bright-english-academy.vercel.app/)
