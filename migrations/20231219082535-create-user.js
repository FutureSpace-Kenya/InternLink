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
      Name: Sequelize.STRING,
      Age: Sequelize.INTEGER,
      Skills: Sequelize.ARRAY(Sequelize.STRING),
      Resume: Sequelize.TEXT,
      EducationDetails: Sequelize.TEXT,
      Experience: Sequelize.TEXT,
      ContactInfo: Sequelize.STRING
    });

    await queryInterface.createTable('Companies', {
      CompanyID: {
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
      CompanyName: Sequelize.STRING,
      Industry: Sequelize.STRING,
      Size: Sequelize.INTEGER,
      Description: Sequelize.TEXT,
      Location: Sequelize.STRING,
      ContactInfo: Sequelize.STRING
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Companies');
    await queryInterface.dropTable('InternProfiles');
    await queryInterface.dropTable('Users');
  }
};