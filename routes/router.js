import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  //req petition
  //res is the express response
  res.render("inicio", {
    pagina: "Inicio", //Passing more data (throught an object) creating a variable called pagina
  });
});

router.get("/us", (req, res) => {
  res.render("us", {
    pagina: "Us",
  });
});
router.get("/testimonials", (req, res) => {
  res.render("testimonials", {
    pagina: "Testimonials",
  });
});
router.get("/travels", (req, res) => {
  res.render("travels", {
    pagina: "Travels",
  });
});

router.get("/contact", (req, res) => {
  //Passing variables to views
  res.send("contact!"); //SEND is use to show somenthin on screen
});

export default router;
