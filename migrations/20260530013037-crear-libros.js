"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("libros", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      anio_publicacion: {
        type: Sequelize.DataTypes.INTEGER,
      },
      copias_disponibles: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      activo: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
      },
      createdAt: { type: Sequelize.DataTypes.DATE },
      updatedAt: { type: Sequelize.DataTypes.DATE },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("libros");
  },
};
