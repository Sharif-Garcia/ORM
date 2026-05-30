"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("autores", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      nacionalidad: {
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: { type: Sequelize.DataTypes.DATE },
      updatedAt: { type: Sequelize.DataTypes.DATE },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("autores");
  },
};
