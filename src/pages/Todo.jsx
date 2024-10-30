import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000/api/v1/auth";
axios.defaults.baseURL = "https://counter-app-backend.vercel.app/api/v1/auth";

function Todo() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      fetchTodos();
    }
  }, [user, navigate]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`/todos/${user._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTodos(response.data.todos || []);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setTodos([]);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/addTodo`,
        { userId: user._id, task: newTodo },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setTodos([...todos, response.data.newTodo]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`/todos/${todoId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setTodos(todos.filter((todo) => todo._id !== todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-cyan-500">
      <div className="bg-white backdrop-blur-lg rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Your Todos
        </h1>

        <form onSubmit={addTodo} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm"
          />
          <button className="py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 shadow-md">
            Add Todo
          </button>
        </form>

        <div className="mt-6 space-y-4">
          {todos.length === 0 ? (
            <div className="text-center text-gray-500">
              No todos found. Add a task to get started!
            </div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo._id}
                className="flex justify-between items-center p-3 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
              >
                <span className="text-gray-800">{todo.task}</span>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="text-red-600 hover:text-red-500 transition duration-300"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
