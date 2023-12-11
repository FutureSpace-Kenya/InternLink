const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const InternProfile = sequelize.define('InternProfile', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    skills: {
        type: DataTypes.STRING,
    },

}, {

});

sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');
});

module.exports = {
    InternProfile,
}
