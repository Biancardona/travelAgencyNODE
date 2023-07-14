import { Sequelize } from "sequelize";
import db from "../config/db.js";

//DEfinir el modelo
//define(agregar el nombre de la tabla y un objeto de configuracion donde se definira cada una de las tablas de la db)

export const Testimoniales = db.define("testimonials", {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
});
