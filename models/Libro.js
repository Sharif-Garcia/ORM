const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Libro extends Model {}

Libro.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    anio_publicacion: {
      type: DataTypes.INTEGER,
    },
    copias_disponibles: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Libro",
    tableName: "libros",
    timestamps: true,
  },
);

module.exports = Libro;
