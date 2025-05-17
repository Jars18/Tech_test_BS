import "./Task.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleTask,
} from "../../store/taskSlice";
import AddTask from "../AddTask/AddTask";
import ExpandList from "../ExpandList/ExpandList";

function Task({ selectedUser }) {
  //Obtendo las tareas
  const dispatch = useDispatch();
  const { list: tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  //Manejador de añadir tarea
  const handleAdd = (title, body) => {
    const newTask = {
      userId: Number(selectedUser.id),
      id: tasks.length + 1,
      title,
      body,
      completed: false,
    };
    dispatch(addTask(newTask));
  };
  //Manejador de eliminar tarea
  const handleDelete = (taskId) => dispatch(deleteTask(taskId));
  //Manejador del estado de la tarea
  const handleToggle = (taskId) => dispatch(toggleTask(taskId));
  //Obtengo tareas del usuario seleccionado
  const filteredTasks = tasks
    .filter((task) => Number(task.userId) === Number(selectedUser.id))
    .map((task, index) => ({ ...task, displayIndex: index + 1 }));

  return (
    <div className="task-container">
      {loading && <p>Cargando tareas...</p>}
      <ExpandList
        items={filteredTasks}
        initialItems={3}
        renderItem={(task) => (
          <div className="task-item-container">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              className="task-checkbox"
            />
            <span className={`task-title ${task.completed ? "completed" : ""}`}>
              {task.displayIndex}. {task.title}
            </span>
            <button
              onClick={() => handleDelete(task.id)}
              className="delete-button"
            >
              🗑️
            </button>
          </div>
        )}
        buttonText={(showAll, total) =>
          showAll ? "Ocultar tareas" : `Ver todas las tareas (${total})`
        }
      />
      <AddTask onAddTask={handleAdd} />
    </div>
  );
}

export default Task;
