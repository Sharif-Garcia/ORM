const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Autor extends Model {}

Autor.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacionalidad: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Autor",
    tableName: "autores",
    timestamps: true,
  },
);

module.exports = Autor;
