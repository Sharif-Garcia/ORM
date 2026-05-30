const { Op } = require("sequelize");
const sequelize = require("../database");
const { Autor, Libro, Usuario, Prestamo } = require("../models/index");

// ─── R4.1 Registrar un libro con sus autores ───────────────────────────────
async function registrarLibro(datosLibro, autorIds) {
  const libro = await Libro.create(datosLibro);
  await libro.setAutors(autorIds);
  return libro;
}

// ─── R4.2 Listar libros activos con sus autores (sin N+1) ──────────────────
async function listarLibros() {
  return await Libro.findAll({
    where: { activo: true },
    include: [{ model: Autor, through: { attributes: [] } }],
  });
}

// ─── R4.3 Registrar un préstamo ────────────────────────────────────────────
async function registrarPrestamo(libroId, usuarioId, fechaDevolucionEsp) {
  const t = await sequelize.transaction();
  try {
    const libro = await Libro.findByPk(libroId, { transaction: t });

    if (!libro || libro.copias_disponibles <= 0) {
      throw new Error("No hay copias disponibles");
    }

    const prestamo = await Prestamo.create(
      {
        libro_id: libroId,
        usuario_id: usuarioId,
        fecha_prestamo: new Date(),
        fecha_devolucion_esp: fechaDevolucionEsp,
      },
      { transaction: t },
    );

    await libro.decrement("copias_disponibles", { by: 1, transaction: t });
    await t.commit();
    return prestamo;
  } catch (error) {
    await t.rollback();
    throw error;
  }
}

// ─── R4.4 Registrar devolución ─────────────────────────────────────────────
async function registrarDevolucion(prestamoId) {
  const t = await sequelize.transaction();
  try {
    const prestamo = await Prestamo.findByPk(prestamoId, { transaction: t });

    if (!prestamo) throw new Error("Préstamo no encontrado");

    await prestamo.update(
      { fecha_devolucion_real: new Date() },
      { transaction: t },
    );

    const libro = await Libro.findByPk(prestamo.libro_id, { transaction: t });
    await libro.increment("copias_disponibles", { by: 1, transaction: t });

    await t.commit();
    return prestamo;
  } catch (error) {
    await t.rollback();
    throw error;
  }
}

// ─── R4.5 Consultar préstamos activos ──────────────────────────────────────
async function prestamosActivos() {
  return await Prestamo.findAll({
    where: { fecha_devolucion_real: null },
    include: [{ model: Libro }, { model: Usuario }],
  });
}

module.exports = {
  registrarLibro,
  listarLibros,
  registrarPrestamo,
  registrarDevolucion,
  prestamosActivos,
};
