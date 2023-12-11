const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('internlink', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});

module.exports = sequelize;
