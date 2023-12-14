const Sequelize = require('sequelize');

const sequelize = require('../db/sequelize');

const Organization = sequelize.define('Organization', {
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
});

module.exports = Organization;
