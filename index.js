const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("App start");
});

app.listen(1234, () => {
  console.log("Express is running");
});
