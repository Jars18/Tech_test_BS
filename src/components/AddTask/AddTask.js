import "./AddTask.css";
import AddTaskIcon from "../../assets/icons/AddTaskIcon.svg";

function AddTask({ onAddTask }) {
  //Manejador muestra alerta para agregar tarea
  const showPrompt = () => {
    const titleInput = prompt("Nombre de la tarea (requerido):");
    if (titleInput === null) return;

    if (!titleInput.trim()) {
      alert("Debes ingresar un nombre para la tarea");
      return;
    }

    const bodyInput = prompt("Descripción (opcional):", "");
    if (bodyInput !== null) {
      onAddTask(titleInput, bodyInput || "");
    }
  };

  return (
    <button className="add-task-button" onClick={showPrompt}>
      <span className="add-task-text">Agregar tarea</span>
      <img src={AddTaskIcon} alt="Add icon" />
    </button>
  );
}

export default AddTask;
