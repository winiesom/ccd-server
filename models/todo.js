import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
