import { Testimoniales } from "../models/Testimoniales.js";

const testomonialMessage = async (req, res) => {
  //Need to parsear the info (in index.js)

  //Validate testimonial form, applying destructuring to read the values
  const { nombre, correo, mensaje } = req.body;
  const errorMessages = [];
  if (nombre.trim() === "") {
    errorMessages.push({ error: "Name field is empty" });
  }
  if (correo.trim() === "") {
    errorMessages.push({ error: "Email field is empty" });
  }
  if (mensaje.trim() === "") {
    errorMessages.push({ error: "Message field is empty" });
  }
  //If exist a message, render it
  if (errorMessages.length > 0) {
    //Consult existing testimoniales
    const testimoniales = await Testimoniales.findAll();
    //Render testimonial result
    res.render("testimonials", {
      pagina: "Testimonials",
      errorMessages,
      name: nombre,
      email: correo,
      message: mensaje,
      resultTestimonials: testimoniales,
    });
  } else {
    try {
      await Testimoniales.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimonials");
    } catch (error) {
      console.log(error);
    }
  }
};

export { testomonialMessage };
