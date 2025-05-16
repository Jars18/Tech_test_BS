import { useState } from "react";
import "./AddTask.css";
import AddTaskIcon from "../assets/AddTaskIcon.svg"; // Cambia la ruta según tu estructura de carpetas

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const showPrompt = () => {
    const titleInput = prompt("Nombre de la tarea (requerido):");
    if (titleInput === null) return; // Si hace click en Cancelar

    if (!titleInput.trim()) {
      alert("Debes ingresar un nombre para la tarea");
      return;
    }

    const bodyInput = prompt("Descripción (opcional):", "");
    if (bodyInput !== null) {
      // Solo si no hizo click en Cancelar
      onAddTask(titleInput, bodyInput || "");
    }
  };

  return (
    <button className="add-task-button" onClick={showPrompt}>
      <span className="add-task-text">Agregar tarea</span>
      <img src={AddTaskIcon} />
    </button>
  );
}

export default AddTask;
