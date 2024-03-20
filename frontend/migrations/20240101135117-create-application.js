'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Applications', {
      ApplicationID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'UserID'
        }
      },
      OrganizationID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      },
      JobID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Jobs',
          key: 'id'
        }
      },
      Status: {
        type: Sequelize.ENUM,
        values: ['Pending', 'Accepted', 'Rejected'],
        defaultValue: 'Pending'
      },
      ApplicationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      ResumeLink: {
        type: Sequelize.STRING,
        allowNull: true // Set to false if mandatory
      },
      CoverLetter: {
        type: Sequelize.TEXT,
        allowNull: true // Set to false if mandatory
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applications');
  }
};
