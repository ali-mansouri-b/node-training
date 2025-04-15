const express = require("express");
const connectDB = require("./db");
const app = express();
const PORT = 3000;

// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world Express.js + MongoDB!");
});

app.listen(PORT, () => {
  console.log(`servier is running on http://localhost:${PORT}`);
});
