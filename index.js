const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("App start");
});

app.listen(process.env.PORT || 1234, () => {
  console.log("Express is running");
});
