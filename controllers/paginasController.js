//CONTROLADOR: Pasa los datos a la vista y le dice que mostrar s
//CONTROLLER: Passes the data to the VIEW and tells it what to display

//Import all the DB fiels (availables in the model)
import { Viaje } from "../models/Viaje.js";

const homePage = (req, res) => {
  //req petition
  //res is the express response
  res.render("inicio", {
    pagina: "Inicio", //Passing more data (throught an object) creating a variable called pagina
  });
};
const usPage = (req, res) => {
  res.render("us", {
    pagina: "Us",
  });
};

const testomonialsPage = (req, res) => {
  res.render("testimonials", {
    pagina: "Testimonials",
  });
};

//Using async await for the response to the DB
const travelsPage = async (req, res) => {
  //Read DB, create a variable to save the finAll method result in Viaje
  //Use finAll method
  const viajes = await Viaje.findAll();
  // console.log(viajes);
  res.render("travels", {
    pagina: "Next Trips",
    resultTravels: viajes,
  });
};

const descriptionPage = async (req, res) => {
  //Destructuring comodin
  const { slug } = req.params;
  //SQL where is used to folter records
  try {
    const viaje = await Viaje.findOne({ where: { slug: slug } });
    res.render("travel", {
      pagina: "Description",
      resultDescriptions: viaje,
    });
  } catch (error) {
    console.log(error);
  }
};
const contactPage = (req, res) => {
  //Passing variables to views
  res.send("contact!"); //SEND is use to show somenthin on screen
};

export {
  homePage,
  usPage,
  testomonialsPage,
  travelsPage,
  contactPage,
  descriptionPage,
};
