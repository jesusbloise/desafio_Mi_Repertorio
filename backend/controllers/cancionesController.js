const fs = require("fs");
const path = require("path");

// Ruta al archivo JSON
const REPERTORIO_FILE = path.resolve(__dirname, "../repertorio.json");

// Leer datos del archivo JSON
const leerRepertorio = () => {
  if (!fs.existsSync(REPERTORIO_FILE)) {
    // Si el archivo no existe, crear uno vacío
    fs.writeFileSync(REPERTORIO_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(REPERTORIO_FILE, "utf8");
  return JSON.parse(data);
};

// Escribir datos en el archivo JSON
const escribirRepertorio = (data) => {
  fs.writeFileSync(REPERTORIO_FILE, JSON.stringify(data, null, 2));
};

// Obtener todas las canciones
const obtenerCanciones = (req, res) => {
  try {
    const repertorio = leerRepertorio();
    res.json(repertorio);
  } catch (error) {
    console.error("Error al leer el repertorio:", error);
    res.status(500).send("Error al leer el repertorio.");
  }
};

// Agregar una nueva canción
const agregarCancion = (req, res) => {
  try {
    const repertorio = leerRepertorio();
    repertorio.push(req.body);
    escribirRepertorio(repertorio);
    res.status(201).send("Canción agregada.");
  } catch (error) {
    console.error("Error al agregar la canción:", error);
    res.status(500).send("Error al agregar la canción.");
  }
};

// Editar una canción
const editarCancion = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repertorio = leerRepertorio();
    const index = repertorio.findIndex((cancion) => cancion.id === id);

    if (index === -1) return res.status(404).send("Canción no encontrada.");

    repertorio[index] = { ...req.body, id };
    escribirRepertorio(repertorio);
    res.send("Canción actualizada.");
  } catch (error) {
    console.error("Error al actualizar la canción:", error);
    res.status(500).send("Error al actualizar la canción.");
  }
};

// Eliminar una canción
const eliminarCancion = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repertorio = leerRepertorio();
    const index = repertorio.findIndex((cancion) => cancion.id === id);

    if (index === -1) return res.status(404).send("Canción no encontrada.");

    repertorio.splice(index, 1);
    escribirRepertorio(repertorio);
    res.send("Canción eliminada.");
  } catch (error) {
    console.error("Error al eliminar la canción:", error);
    res.status(500).send("Error al eliminar la canción.");
  }
};

module.exports = {
  obtenerCanciones,
  agregarCancion,
  editarCancion,
  eliminarCancion,
};
