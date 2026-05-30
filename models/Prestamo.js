const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Prestamo extends Model {}

Prestamo.init(
  {
    fecha_prestamo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    fecha_devolucion_esp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_devolucion_real: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Prestamo",
    tableName: "prestamos",
    timestamps: true,
  },
);

module.exports = Prestamo;
