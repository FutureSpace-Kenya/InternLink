const {Sequelize, DataTypes} = require('sequelize');
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
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SecondName: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
  timestamps: false,
    tableName: 'Users',
    freezeTableName: true,
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
    University: DataTypes.STRING,
    CourseOfStudy: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    IdNumber: DataTypes.STRING,
}, {
    timestamps: false,
    freezeTableName: true,
});

InternProfile.belongsTo(User, {foreignKey: 'UserID'});
User.hasOne(InternProfile, {foreignKey: 'UserID'});
module.exports = {User, InternProfile};