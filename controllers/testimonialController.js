import { Testimoniales } from "../models/Testimoniales.js";

const testomonialMessage = async (req, res) => {
  //Need to parsear the info (in index.js)

  //Validate testimonial form, applying destructuring to read the values
  const { name, email, message } = req.body;
  const errorMessages = [];
  if (name.trim() === "") {
    errorMessages.push({ error: "Name field is empty" });
  }
  if (email.trim() === "") {
    errorMessages.push({ error: "Email field is empty" });
  }
  if (message.trim() === "") {
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
      name: name,
      email: email,
      message: message,
      resultTestimonials: testimoniales,
    });
  } else {
    try {
      await Testimoniales.create({
        name,
        email,
        message,
      });
      res.redirect("/testimonials");
    } catch (error) {
      console.log(error);
    }
  }
};

export { testomonialMessage };
