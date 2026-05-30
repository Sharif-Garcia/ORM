const Autor = require("./Autor");
const Libro = require("./Libro");
const Usuario = require("./Usuario");
const Prestamo = require("./Prestamo");

// N:M — Libro <-> Autor (tabla intermedia: libro_autores)
Libro.belongsToMany(Autor, {
  through: "libro_autores",
  foreignKey: "libro_id",
  otherKey: "autor_id",
});
Autor.belongsToMany(Libro, {
  through: "libro_autores",
  foreignKey: "autor_id",
  otherKey: "libro_id",
});

// N:1 — Prestamo -> Libro
Prestamo.belongsTo(Libro, { foreignKey: "libro_id" });
Libro.hasMany(Prestamo, { foreignKey: "libro_id" });

// N:1 — Prestamo -> Usuario
Prestamo.belongsTo(Usuario, { foreignKey: "usuario_id" });
Usuario.hasMany(Prestamo, { foreignKey: "usuario_id" });

module.exports = { Autor, Libro, Usuario, Prestamo };
