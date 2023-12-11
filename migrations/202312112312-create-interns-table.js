module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Interns', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        secondName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        university: {
          type: Sequelize.STRING,
          allowNull: false
        },
        courseOfStudy: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        phoneNumber: {
          type: Sequelize.STRING,
          allowNull: false,
            unique: true
        },
        idNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        regNumber: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        countyOfResidency: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Interns');
    }
  };
  