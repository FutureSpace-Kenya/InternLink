const Sequelize = require('sequelize');

const sequelize = require('../db');

const Intern = sequelize.define('Intern', {
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
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    virtual: true,
    get() {
      return `${this.firstName} ${this.secondName}`;
    }
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
  }
});

module.exports = Intern;
