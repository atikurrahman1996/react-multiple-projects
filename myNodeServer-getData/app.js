const express = require("express");
const phones = require("./phones.json");
const app = express();

app.get("/", (req, res) => {
  res.send(" Hello world");
});
// Get all phones data
app.get("/phones", (req, res) => {
  res.send(phones);
});

//get single phones data

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Id of the phone is:", id);

  //finding id & match id

  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

module.exports = app;
