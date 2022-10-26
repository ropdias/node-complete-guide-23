// import express from 'express';
import { Router } from "express"; // We should import only what we need

const todos = [];

// const router = express.Router();
const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

export default router;
