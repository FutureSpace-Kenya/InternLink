module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Organizations', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
            unique: true
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false
        },
        departments: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        contactNumber: {
          type: Sequelize.STRING,
          allowNull: false,
            unique: true
        },
        availablePositions: {
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
      await queryInterface.dropTable('Organizations');
    }
  };
  