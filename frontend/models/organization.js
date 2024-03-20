const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Department = require('./department'); // Import the Department model

class Organization extends Model {
  static associate(models) {
    Organization.hasMany(models.Department, { foreignKey: 'organizationId' });
  }
}

Organization.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Organization',
  }
);

module.exports = Organization;
