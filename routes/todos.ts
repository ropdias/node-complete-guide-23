// import express from 'express';
import { Router } from "express"; // We should import only what we need with named import
import bodyParser from "body-parser";

import { Todo } from "../models/todo"; // Using a named import

const todos: Todo[] = [];

// const router = express.Router();
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", bodyParser.json(), (req, res, next) => {
  // Using the Todo type to force TS to force me to add the correct data:
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
});

export default router;
