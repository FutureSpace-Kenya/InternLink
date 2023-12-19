const { Sequelize } = require("sequelize");
const DB_NAME = process.env.DB_NAME || "interlink";
const DB_USER = process.env.DB_USER || "db";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_HOST = process.env.DB_HOST || "localhost";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: true,
  port: 25060,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: require('pg'),
});

module.exports = sequelize;
