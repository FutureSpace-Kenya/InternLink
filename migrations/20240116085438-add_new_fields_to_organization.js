'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Organizations', 'logo', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Organizations', 'slug', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Organizations', 'image', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Organizations', 'website', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Organizations', 'description', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn('Organizations', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Organizations', 'services', {
      type: Sequelize.JSON,
      allowNull: true,
    });

    await queryInterface.addColumn('Organizations', 'employees', {
        type: Sequelize.INTEGER,
        allowNull: true,
        });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Organizations', 'logo');
    await queryInterface.removeColumn('Organizations', 'slug');
    await queryInterface.removeColumn('Organizations', 'image');
    await queryInterface.removeColumn('Organizations', 'website');
    await queryInterface.removeColumn('Organizations', 'description');
    await queryInterface.removeColumn('Organizations', 'email');
    await queryInterface.removeColumn('Organizations', 'services');
    await queryInterface.removeColumn('Organizations', 'employees');
  },
};
