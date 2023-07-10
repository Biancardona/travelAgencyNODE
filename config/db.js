import Sequelize from "sequelize";

//New instance of sequelize
//Pass the name of the db , and the user name, the password, and some configs
const db = new Sequelize("TravelAgency1", "root", "", {
  host: "127.0.0.1",
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
});
export default db;
