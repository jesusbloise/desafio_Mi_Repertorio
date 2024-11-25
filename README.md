🎵 Proyecto: Mi Repertorio Musical
Este proyecto es una aplicación web para gestionar un repertorio musical. Permite listar canciones, agregar nuevas, editarlas y eliminarlas. Está construido con una arquitectura frontend-backend simple, utilizando tecnologías como Node.js, Express, y un archivo JSON como base de datos.

📁 Estructura del Proyecto
/proyecto
  ├── /frontend               # Archivos del frontend
  ├── /backend                # Archivos del backend
  │   ├── cancionesController.js
  │   ├── cancionesRoutes.js
  │   ├── repertorio.json     # Base de datos local en formato JSON
  │   ├── server.js           # Archivo principal del servidor
  └── package.json            # Dependencias del proyecto

🚀 Características
CRUD Completo:
Crear nuevas canciones.
Read (Leer) todas las canciones.
Update (Actualizar) canciones existentes.
Delete (Eliminar) canciones.
Backend con Node.js y Express:
Rutas organizadas en un archivo separado.
Controladores manejan la lógica del negocio.
Frontend Estático:
Servido directamente desde la carpeta /frontend usando Express.
Base de datos local:
Archivo repertorio.json para almacenar las canciones.

Estructura del Proyecto:
Frontend: Coloca aquí los archivos HTML, CSS y JS estáticos.
Backend: Implementa la lógica del servidor con Node.js y Express.

Ejecución del servidor:
node backend/server.js
Abrir en el navegador: Ve a http://localhost:3000 para interactuar con la aplicación.

📜 Rutas de la API
Base URL: http://localhost:3000/canciones
Método	Ruta	Descripción
GET	/	Obtener todas las canciones del repertorio.
POST	/	Agregar una nueva canción.
PUT	/:id	Editar una canción existente.
DELETE	/:id	Eliminar una canción por su ID.

📂 Archivos Clave
server.js
Archivo principal del servidor. Configura el middleware, las rutas y el puerto.
cancionesRoutes.js
Define las rutas de la API para manejar el repertorio.
cancionesController.js
Contiene la lógica del CRUD para gestionar las canciones en el archivo repertorio.json.
repertorio.json
Archivo JSON que actúa como base de datos para almacenar las canciones.

🧩 Ejemplo de JSON (repertorio.json)
json
Copiar código
[
  {
    "id": 1,
    "titulo": "Bohemian Rhapsody",
    "artista": "Queen",
    "tono": "B♭"
  },
  {
    "id": 2,
    "titulo": "Imagine",
    "artista": "John Lennon",
    "tono": "C"
  }
]

✨ Mejoras Futuras
Implementar una base de datos real como MongoDB o MySQL.
Crear un frontend dinámico con React o Vue.js.
Autenticación de usuarios para gestionar diferentes repertorios.
Integrar un despliegue en plataformas como Heroku o Vercel.

🛡️ Requerimientos
Node.js (v14 o superior).
NPM (v6 o superior).

🖋️ Autor
Tu Nombre - jesus bloise
