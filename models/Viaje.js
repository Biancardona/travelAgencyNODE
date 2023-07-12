import { Sequelize } from "sequelize";
import db from "../config/db.js";

//DEfinir el modelo
//define(agregar el nombre de la tabla y un objeto de configuracion donde se definira cada una de las tablas de la db)

export const Viaje = db.define("viajes", {
  titulo: {
    type: Sequelize.STRING,
  },
  precio: {
    type: Sequelize.STRING,
  },
  fecha_ida: {
    type: Sequelize.DATE,
  },
  fecha_vuelta: {
    type: Sequelize.DATE,
  },
  imagen: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
  disponibles: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
});
