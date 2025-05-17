# React To Do's List
Aplicación de tareas construida con **React**, **Redux** y **React Router**, que permite a los usuarios iniciar sesión, visualizar sus tareas pendientes, añadir nuevas tareas, marcarlas como completadas, eliminarlas y ver comentarios asociados a publicaciones.

## Estructura del proyecto
src/
├── assets/ 
│   └── icons/          # Íconos
│   └── images/         # Imágenes
├── components/         # Componentes, estilos y tests
│   └── AddTask/, Comments/, Dropdown/, ExpandList/, etc.
├── store/              # Configuración y reducers de Redux
├── pages/              # Páginas principales (Homepage, Taskpage)
├── App.js              # Componente principal
└── index.js            # Punto de entrada de React

## Componentes principales
- Header que muestra el nombre del usuario.
- Lista desplegable de Inicio de sesión básico por usuario simulado.
- Listado de tareas por usuario.
- Añadir y eliminar tareas.
- Visualización de comentarios por usuario.
- Estado global para LogIn/LogOut, seleccion de usuario y manejo de la API gestionado con Redux.

## Pruebas unitarias
- Pruebas unitarias con Testing Library y Jest.

## Tecnologías usadas

- **React** 
- **Redux**: Manejador de estados
- **React Router DOM**: Manejador de rutas a las páginas
- **Axios**: Manejador de API
- **Jest** + **React Testing Library**

## Ejecuta el código
npm start
## Abre el navegador
http://localhost:3000
## Ejecuta las pruebas unitarias
npm test

## Github Link
https://github.com/Jars18/Tech_test_BS.git
## Github Page
https://jars18.github.io/Tech_test_BS
