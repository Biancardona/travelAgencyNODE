import express from "express";
import router from "./routes/router.js";
import db from "./config/db.js";

const app = express(); //Function to execute express

//conecting DB
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log("error"));

//Define PORT
const port = process.env.PORT || 4000; //Until its in production use port 4000

//Enabling date
//NEXT enables goint to the next middleware
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear(); //locals (internals variables in order to pass information through views files)
  res.locals.nameApp = "Travel Agency";
  return next();
});

app.set("view engine", "pug"); //Enabling PUG

app.use(express.static("public")); //Defining public static files

app.use("/", router);

app.listen(port, () => {
  console.log(`Server working in port ${port}`);
});
