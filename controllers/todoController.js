const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title, // get title from body
    });
    await todo.save(); // save in database
    res.status(201).json(todo); // send response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find(); // get all documents
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id, // آیدی Todo از URL
      { completed: req.body.completed }, // فیلدهایی که آپدیت میشوند
      { new: true } // برگرداندن نسخه آپدیتشده
    );
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo با موفقیت حذف شد!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
