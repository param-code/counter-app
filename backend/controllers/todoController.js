const Todo = require("../models/Todo");

async function addTodo(req, res) {
  try {
    const { task, userId } = req.body;

    console.log(req.body);
    if (!task || !userId) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    const newTodo = await Todo.create({
      task,
      userId,
    });

    return res.status(200).json({
      success: true,
      newTodo,
      message: "Todo added successfully!",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Cannot add todo",
    });
  }
}

async function getTodos(req, res) {
  try {
    const { userId } = req.params;

    // Find todos that match the provided userId
    const todos = await Todo.find({ userId });

    if (!todos || todos.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No todos found for this user",
      });
    }

    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Error fetching todos",
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const todoId = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the todo" });
  }
}

module.exports = {
  addTodo,
  getTodos,
  deleteTodo,
};
