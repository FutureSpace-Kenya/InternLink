const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UserType: {
    type: DataTypes.ENUM,
    values: ['Intern', 'Company'],
    allowNull: false
  },
  ProfileCreatedDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

const InternProfile = sequelize.define('InternProfile', {
  ProfileID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'UserID'
    }
  },
  Name: DataTypes.STRING,
  Age: DataTypes.INTEGER,
  Skills: DataTypes.ARRAY(DataTypes.STRING),
  Resume: DataTypes.TEXT,
  EducationDetails: DataTypes.TEXT,
  Experience: DataTypes.TEXT,
  ContactInfo: DataTypes.STRING
});

const Company = sequelize.define('Company', {
  CompanyID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'UserID'
    }
  },
  CompanyName: DataTypes.STRING,
  Industry: DataTypes.STRING,
  Size: DataTypes.INTEGER,
  Description: DataTypes.TEXT,
  Location: DataTypes.STRING,
  ContactInfo: DataTypes.STRING
});

User.hasOne(InternProfile, {foreignKey: 'UserID'});
InternProfile.belongsTo(User, {foreignKey: 'UserID'});

module.exports = { User, InternProfile, Company };