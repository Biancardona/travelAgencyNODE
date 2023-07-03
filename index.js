import express from "express";
const app = express(); //Function to execute express

//Define PORT

const port = process.env.PORT || 4000; //Until its in production use port 4000

app.get("/", (req, res) => {
  //req petition
  //res is the express response
  res.send("Hola Mundo!"); //SEND is use to show somenthin on screen
}); //Sending a petition to the 4000 port

app.listen(port, () => {
  console.log("Server working in port ${port}");
});
