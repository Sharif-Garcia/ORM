const express = require("express");
const router = express.Router();
const {
  registrarLibro,
  listarLibros,
  registrarPrestamo,
  registrarDevolucion,
  prestamosActivos,
} = require("../services/bibliotecaService");

// Listar libros activos con autores
router.get("/libros", async (req, res) => {
  try {
    const libros = await listarLibros();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Registrar un libro
router.post("/libros", async (req, res) => {
  try {
    const { autorIds, ...datosLibro } = req.body;
    const libro = await registrarLibro(datosLibro, autorIds);
    res.status(201).json(libro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Registrar un préstamo
router.post("/prestamos", async (req, res) => {
  try {
    const { libroId, usuarioId, fechaDevolucionEsp } = req.body;
    const prestamo = await registrarPrestamo(
      libroId,
      usuarioId,
      fechaDevolucionEsp,
    );
    res.status(201).json(prestamo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Registrar devolución
router.patch("/prestamos/:id/devolucion", async (req, res) => {
  try {
    const prestamo = await registrarDevolucion(req.params.id);
    res.json(prestamo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Préstamos activos
router.get("/prestamos/activos", async (req, res) => {
  try {
    const prestamos = await prestamosActivos();
    res.json(prestamos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
