import express from "express";
import {
  homePage,
  usPage,
  testomonialsPage,
  travelsPage,
  contactPage,
  descriptionPage,
} from "../controllers/paginasController.js";

const router = express.Router();

//Rutas asociada que va al controlador
router.get("/", homePage);

router.get("/us", usPage);

router.get("/testimonials", testomonialsPage);

router.get("/travels", travelsPage);

//Comodin que dependiendo de la respuesta en el controller, se traera el slug correspondiente
router.get("/travels/:slug", descriptionPage);

router.get("/contact", contactPage);

export default router;
