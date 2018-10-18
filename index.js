const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("App start");
});

app.get("/submit", (req, res) => {
  res.sendFile(path.join(__dirname, "/view/form.html"));
});

app.post("/submit", (req, res) => {
  console.log({
    name: req.body.name,
    message: req.body.message
  });
  res.send("Thanks for messaging");
});

app.listen(process.env.PORT || 2345, () => {
  console.log("Express is running");
});
