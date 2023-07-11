import express from "express";
import {
  homePage,
  usPage,
  testomonialsPage,
  travelsPage,
  contactPage,
} from "../controllers/paginasController.js";

const router = express.Router();

//Ruta asociada que va al controlador
router.get("/", homePage);

router.get("/us", usPage);

router.get("/testimonials", testomonialsPage);

router.get("/travels", travelsPage);

router.get("/contact", contactPage);

export default router;
