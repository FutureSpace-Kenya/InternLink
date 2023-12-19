'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      UserID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      UserType: {
        type: Sequelize.ENUM('Intern', 'Company'),
        allowNull: false
      },
      ProfileCreatedDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SecondName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    await queryInterface.createTable('InternProfiles', {
      ProfileID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'UserID'
        }
      },
      University: Sequelize.STRING,
      CourseOfStudy: Sequelize.STRING,
      PhoneNumber: Sequelize.STRING,
      IdNumber: Sequelize.STRING,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('InternProfiles');
    await queryInterface.dropTable('Users');
  }
};