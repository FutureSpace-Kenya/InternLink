const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class Job extends Model {
  static associate(models) {
    Job.belongsTo(models.Department, { foreignKey: 'departmentId' });
  }
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Job',
  }
);

module.exports = Job;
