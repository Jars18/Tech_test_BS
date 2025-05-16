import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogButton.css"; // Asegúrate de tener este archivo CSS

const LogButton = ({ isLoggedIn, setIsLoggedIn, selectedUserId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!selectedUserId) {
      alert("Por favor selecciona un usuario primero");
      return;
    }
    setIsLoggedIn(!isLoggedIn);
    if (!isLoggedIn) {
      navigate("/task");
    } else {
      navigate("/");
    }
  };

  return (
    <button
      className="log-button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
    </button>
  );
};

export default LogButton;
