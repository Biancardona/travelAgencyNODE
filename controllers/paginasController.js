//CONTROLADOR: Pasa los datos a la vista y le dice que mostrar s
//CONTROLLER: Passes the data to the VIEW and tells it what to display

//Import all the DB fiels (availables in the model)
import { Viaje } from "../models/Viaje.js";
import { Testimoniales } from "../models/Testimoniales.js";

const homePage = async (req, res) => {
  //req petition
  //res is the express response
  //USar una promise para ejecutar viaje y testimoniales, y asi evitar el await

  const promiseResults = [];
  promiseResults.push(Viaje.findAll({ limit: 3 }));
  promiseResults.push(Testimoniales.findAll({ limit: 3 }));

  try {
    //Para que ambas consultas corran al mismo tiempo
    const resultado = await Promise.all(promiseResults);

    res.render("inicio", {
      pagina: "Home", //Passing more data (throught an object) creating a variable called pagina
      clase: "home",
      resultTravels: resultado[0],
      resultTestimonials: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};
const usPage = (req, res) => {
  res.render("us", {
    pagina: "Us",
  });
};

const testomonialsPage = async (req, res) => {
  const testimoniales = await Testimoniales.findAll();
  //If exist a message, render it
  res.render("testimonials", {
    pagina: "Testimonials",
    resultTestimonials: testimoniales,
  });
};

//Using async await for the response to the DB
const travelsPage = async (req, res) => {
  //Read DB, create a variable to save the finAll method result in Viaje
  //Use finAll method= returns an array

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
  //SQL where is used to filter records(SQL language)
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
