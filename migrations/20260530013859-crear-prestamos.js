"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("prestamos", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      libro_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: "libros", key: "id" },
      },
      usuario_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: "usuarios", key: "id" },
      },
      fecha_prestamo: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      fecha_devolucion_esp: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      fecha_devolucion_real: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
      },
      createdAt: { type: Sequelize.DataTypes.DATE },
      updatedAt: { type: Sequelize.DataTypes.DATE },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("prestamos");
  },
};
