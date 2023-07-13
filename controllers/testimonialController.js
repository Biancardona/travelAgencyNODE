const testomonialMessage = (req, res) => {
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
  //If exist a message, render an alert
  if (errorMessages.length > 0) {
    res.render("testimonials", {
      pagina: "Testimonials",
      errorMessages,
      name: name,
      email: email,
      message: message,
    });
  }
};

export { testomonialMessage };
