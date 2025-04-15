const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true // to say that this field is required 
  },
  completed: {
    type: Boolean,
    default: false // default value : false
  },
  createdAt: {
    type: Date,
    default: Date.now
    // if we use Date.now() the date defined in schema is always considered, but when we use Date.now, eacth time the date at the request time is returned and the function Date.now is called only at the request time.
  }
});

// convert schema to model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;