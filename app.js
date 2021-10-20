const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const homeRoute = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(homeRoute);

/*
app.get("/", (req, res) => {
  res.send("Welcome to Dominican Soul!");
});
*/

app.listen(process.env.PORT || 3000, () => {
  console.log("Now listening on PORT 3000!");
});
