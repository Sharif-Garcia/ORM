"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("libro_autores", {
      libro_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: "libros", key: "id" },
      },
      autor_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: { model: "autores", key: "id" },
      },
      createdAt: { type: Sequelize.DataTypes.DATE },
      updatedAt: { type: Sequelize.DataTypes.DATE },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("libro_autores");
  },
};
