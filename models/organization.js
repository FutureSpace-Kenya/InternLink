const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db/sequelize');
const Department = require('./department'); // Import the Department model

class Organization extends Model {
    static associate(models) {
        Organization.hasMany(models.Department, {foreignKey: 'organizationId'});
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
        logo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        services: {
            type: DataTypes.JSON,
            allowNull: true,
        },
        employees: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Organization',
    }
);

module.exports = Organization;
