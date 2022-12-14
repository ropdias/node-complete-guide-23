// import express from 'express';
import { Router } from "express"; // We should import only what we need with named import
import bodyParser from "body-parser";

import { Todo } from "../models/todo"; // Using a named import

// You could define multiple aliases for bodies and params if you have different routes
// with different kinds of bodies and params
type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

// const router = express.Router();
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", bodyParser.json(), (req, res, next) => {
  const body = req.body as RequestBody; // Using Type Casting to tell TS what to expect from the req.body
  // Using the Todo type to force TS to force me to add the correct data:
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", bodyParser.json(), (req, res, next) => {
  const params = req.params as RequestParams;
  const body = req.body as RequestBody; // Using Type Casting to tell TS what to expect from the req.body
  const tid = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
    return res.status(200).json({ message: "Updated todo", todos: todos });
  }
  res.status(404).json({ message: "Could not find todo for this id." });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;
  todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
  res.status(200).json({ message: "Deleted todo", todos: todos });
});

export default router;
