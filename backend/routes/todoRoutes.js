const express = require("express");
const { addTodo, getTodos, deleteTodo } = require("../controllers/todoController");
const { verifyJWT } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/add", verifyJWT, addTodo);
router.get("/:userId", verifyJWT, getTodos);
router.delete("/:id", verifyJWT, deleteTodo);

module.exports = router;
