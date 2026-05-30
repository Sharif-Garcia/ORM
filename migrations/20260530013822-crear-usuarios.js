"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    await queryInterface.dropTable("usuarios");
  },
};
