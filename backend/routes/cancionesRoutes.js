const express = require("express");
const {
  obtenerCanciones,
  agregarCancion,
  editarCancion,
  eliminarCancion,
} = require("../controllers/cancionesController");

const router = express.Router();

router.get("/", obtenerCanciones);
router.post("/", agregarCancion);
router.put("/:id", editarCancion);
router.delete("/:id", eliminarCancion);

module.exports = router;
