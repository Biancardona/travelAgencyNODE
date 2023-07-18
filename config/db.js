import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//New instance of sequelize
//Pass the name of the db , and the user name, the password(empty), and some configs
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.HOST,
    port: "3306",
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorAliases: false,
  }
);
export default db;
