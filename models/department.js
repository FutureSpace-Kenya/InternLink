const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Job = require('./job'); // Import the Job model

class Department extends Model {
  static associate(models) {
    Department.belongsTo(models.Organization, { foreignKey: 'organizationId' });
    Department.hasMany(models.Job, { foreignKey: 'departmentId' });
  }
}

Department.init(
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
  },
  {
    sequelize,
    modelName: 'Department',
  }
);

module.exports = Department;
