import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  //req petition
  //res is the express response
  res.render("inicio"); //SEND is use to show somenthin on screen
}); //Sending a petition to the 4000 port

router.get("/us", (req, res) => {
  res.render("us");
});

router.get("/contact", (req, res) => {
  //Passing variables to views
  res.send("contact!");
});

export default router;
