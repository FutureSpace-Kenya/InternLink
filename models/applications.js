const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const User  = require('./user')
const Organization = require('./organization')
const Job = require('./job')

const Applications = sequelize.define('Application', {
    ApplicationID: {
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
    OrganizationID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Organization,
            key: 'organizationId'
        }
    },
    JobID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Job,
            key: 'jobId'
        }
    },
    Status: {
        type: DataTypes.ENUM,
        values: ['Pending', 'Accepted', 'Rejected'],
        defaultValue: 'Pending'
    },
    ApplicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    ResumeLink: {
        type: DataTypes.STRING,
        allowNull: true // Set to false if mandatory
    },
    CoverLetter: {
        type: DataTypes.TEXT,
        allowNull: true // Set to false if mandatory
    },
}, {
    timestamps: false
});

// Applications.belongsTo(User, { foreignKey: 'UserID' });
// Applications.belongsTo(Organization, { foreignKey: 'OrganizationID' });
// Applications.belongsTo(Job, { foreignKey: 'JobID' });

module.exports = Applications;
