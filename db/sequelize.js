const { Sequelize } = require("sequelize");
const DB_NAME = process.env.DB_NAME || "interlink";
const DB_USER = process.env.DB_USER || "internlink_test";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_HOST = process.env.DB_HOST || "localhost";

const sequelize = new Sequelize("DB_NAME", "DB_USER", "DB_PASSWORD", {
  host: DB_HOST,
  dialect: "mysql",
  logging: true,
});

module.exports = sequelize;
