//CONTROLADOR: Pasa los datos a la vista y le dice que mostrar s
//CONTROLLER: Passes the data to the VIEW and tells it what to display

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

const travelsPage = (req, res) => {
  res.render("travels", {
    pagina: "Travels",
  });
};

const contactPage = (req, res) => {
  //Passing variables to views
  res.send("contact!"); //SEND is use to show somenthin on screen
};

export { homePage, usPage, testomonialsPage, travelsPage, contactPage };
