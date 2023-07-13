const testomonialMessage = (req, res) => {
  //Need to parsear the info (in index.js)
  const mensaje = [];
  //Validate testimonial form, applying destructuring to read the values
  const { name, email, message } = req.body;
  if (name.trim() === "") {
    mensaje.push({ messaje: "Name field is empty" });
  }
  if (email.trim() === "") {
    mensaje.push({ messaje: "Email field is empty" });
  }
  if (message.trim() === "") {
    mensaje.push({ messaje: "Message field is empty" });
  }
  console.log(mensaje);
};

export { testomonialMessage };
