"use strict";

module.exports = {
  async up(queryInterface) {
    // 3 Autores
    await queryInterface.bulkInsert("autores", [
      {
        nombre: "Gabriel",
        apellido: "García Márquez",
        nacionalidad: "Colombiano",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Jorge Luis",
        apellido: "Borges",
        nacionalidad: "Argentino",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Isabel",
        apellido: "Allende",
        nacionalidad: "Chilena",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 5 Libros
    await queryInterface.bulkInsert("libros", [
      {
        titulo: "Cien años de soledad",
        isbn: "978-0-06-088328-7",
        anio_publicacion: 1967,
        copias_disponibles: 3,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "El amor en los tiempos del cólera",
        isbn: "978-0-14-303943-3",
        anio_publicacion: 1985,
        copias_disponibles: 2,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Ficciones",
        isbn: "978-0-8021-3011-5",
        anio_publicacion: 1944,
        copias_disponibles: 4,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "El Aleph",
        isbn: "978-0-14-028270-5",
        anio_publicacion: 1949,
        copias_disponibles: 2,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "La casa de los espíritus",
        isbn: "978-1-5011-5609-7",
        anio_publicacion: 1982,
        copias_disponibles: 3,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 2 Usuarios
    await queryInterface.bulkInsert("usuarios", [
      {
        nombre: "Juan Pérez",
        email: "juan@email.com",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "María López",
        email: "maria@email.com",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Relaciones libro_autores
    await queryInterface.bulkInsert("libro_autores", [
      {
        libro_id: 1,
        autor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 2,
        autor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 3,
        autor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 4,
        autor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 5,
        autor_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 2 Préstamos
    await queryInterface.bulkInsert("prestamos", [
      {
        libro_id: 1,
        usuario_id: 1,
        fecha_prestamo: new Date(),
        fecha_devolucion_esp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        fecha_devolucion_real: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 3,
        usuario_id: 2,
        fecha_prestamo: new Date(),
        fecha_devolucion_esp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        fecha_devolucion_real: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("prestamos", null, {});
    await queryInterface.bulkDelete("libro_autores", null, {});
    await queryInterface.bulkDelete("usuarios", null, {});
    await queryInterface.bulkDelete("libros", null, {});
    await queryInterface.bulkDelete("autores", null, {});
  },
};
("use strict");

module.exports = {
  async up(queryInterface) {
    // 3 Autores
    await queryInterface.bulkInsert("autores", [
      {
        nombre: "Gabriel",
        apellido: "García Márquez",
        nacionalidad: "Colombiano",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Jorge Luis",
        apellido: "Borges",
        nacionalidad: "Argentino",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Isabel",
        apellido: "Allende",
        nacionalidad: "Chilena",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 5 Libros
    await queryInterface.bulkInsert("libros", [
      {
        titulo: "Cien años de soledad",
        isbn: "978-0-06-088328-7",
        anio_publicacion: 1967,
        copias_disponibles: 3,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "El amor en los tiempos del cólera",
        isbn: "978-0-14-303943-3",
        anio_publicacion: 1985,
        copias_disponibles: 2,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "Ficciones",
        isbn: "978-0-8021-3011-5",
        anio_publicacion: 1944,
        copias_disponibles: 4,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "El Aleph",
        isbn: "978-0-14-028270-5",
        anio_publicacion: 1949,
        copias_disponibles: 2,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: "La casa de los espíritus",
        isbn: "978-1-5011-5609-7",
        anio_publicacion: 1982,
        copias_disponibles: 3,
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 2 Usuarios
    await queryInterface.bulkInsert("usuarios", [
      {
        nombre: "Juan Pérez",
        email: "juan@email.com",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "María López",
        email: "maria@email.com",
        activo: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Relaciones libro_autores
    await queryInterface.bulkInsert("libro_autores", [
      {
        libro_id: 1,
        autor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 2,
        autor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 3,
        autor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 4,
        autor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 5,
        autor_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // 2 Préstamos
    await queryInterface.bulkInsert("prestamos", [
      {
        libro_id: 1,
        usuario_id: 1,
        fecha_prestamo: new Date(),
        fecha_devolucion_esp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        fecha_devolucion_real: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        libro_id: 3,
        usuario_id: 2,
        fecha_prestamo: new Date(),
        fecha_devolucion_esp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        fecha_devolucion_real: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("prestamos", null, {});
    await queryInterface.bulkDelete("libro_autores", null, {});
    await queryInterface.bulkDelete("usuarios", null, {});
    await queryInterface.bulkDelete("libros", null, {});
    await queryInterface.bulkDelete("autores", null, {});
  },
};
