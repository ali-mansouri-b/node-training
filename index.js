const express = require("express");
const connectDB = require("./db");
const todoRoutes = require("./routes/todoRoutes");
const app = express();
const PORT = 3000;

// middleware for reading json from request
app.use(express.json());

// connect to database
connectDB();

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`servier is running on http://localhost:${PORT}`);
});
