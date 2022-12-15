import Todo from "../models/todo.js";
import mongoose from "mongoose";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addTodo = async (req, res) => {
  const todo = req.body;

  const newTodo = new Todo(todo);

  try {
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editTodo = async (req, res) => {
  const { id } = req.params;

  const { title, description, isCompleted } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No todo with id: ${id}`);

  const updatedTodo = { title, description, isCompleted, _id: id };

  await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

  res.json(updatedTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No todo with id: ${id}`);

  await Todo.findByIdAndRemove(id);

  res.json({ message: "Todo deleted successfully" });
};
