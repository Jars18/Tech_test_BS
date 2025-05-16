import "./Task.css";
import { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./AddTask";
import ExpandList from "./ExpandList";

function Task({ selectedUserId }) {
  const [tasks, setTasks] = useState([]);

  const fetchData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Añadir campo 'completed' a cada tarea
        const tasksWithCompletion = response.data.map((task) => ({
          ...task,
          completed: false,
        }));
        setTasks(tasksWithCompletion);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewPost = (title, body) => {
    const newPost = {
      userId: Number(selectedUserId),
      id: tasks.length + 1,
      title,
      body,
      completed: false,
    };
    setTasks([...tasks, newPost]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) => Number(task.userId) === Number(selectedUserId))
    .map((task, index) => ({ ...task, displayIndex: index + 1 }));

  return (
    <div className="task-container">
      <ExpandList
        items={filteredTasks}
        initialItems={3}
        renderItem={(task) => (
          <div className="task-item-container">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="task-checkbox"
            />
            <span className={`task-title ${task.completed ? "completed" : ""}`}>
              {task.displayIndex}. {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
            >
              🗑️
            </button>
          </div>
        )}
        listClassName="task-list"
        itemClassName="task-item"
        buttonText={(showAll, total) =>
          showAll ? "Ocultar tareas" : `Ver todas las tareas (${total})`
        }
      />
      <AddTask onAddTask={addNewPost} />
    </div>
  );
}

export default Task;
