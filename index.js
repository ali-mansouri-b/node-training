const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
  //Create an error and pass it to the next function
  const err = new Error("Something went wrong");
  next(err);
});

/*
 * other route handlers and middleware here
 * ....
 */

//An error handling middleware
app.use(function (err, req, res, next) {
  res.status(500);
  res.send("Oops, something went wrong.");
});

app.listen(3000);
