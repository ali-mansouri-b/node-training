const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
  res.cookie("name", "express", { maxAge: 36000 }).send("cookie set"); //Sets name = express
});

app.listen(3000);
