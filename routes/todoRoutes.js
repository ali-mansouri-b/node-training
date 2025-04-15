const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.post("/", createTodo);
router.get("/", getAllTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
