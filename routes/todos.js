import express from "express";

import {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.patch("/:id", editTodo);
router.delete("/:id", deleteTodo);

export default router;
