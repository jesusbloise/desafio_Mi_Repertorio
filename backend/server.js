const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const cancionesRoutes = require("./routes/cancionesRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas de API
app.use("/canciones", cancionesRoutes);

// Servir el frontend
app.use(express.static(path.resolve(__dirname, "../frontend")));

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada.");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
