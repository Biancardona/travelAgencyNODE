import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//New instance of sequelize
//Pass the name of the db , and the user name, the password(empty), and some configs
const db = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PASS,
  process.env.BD_PORT,
  process.env.BD_HOST,

  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
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
