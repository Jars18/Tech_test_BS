import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/logSlice";
import "./LogButton.css";

const LogButton = ({ selectedUserId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); //Obtengo estado de logueo

  //Cuando se selecciona un usuario y se hace click en el boton voy a una Página
  const handleClick = () => {
    if (!isLoggedIn) {
      if (!selectedUserId) {
        alert("Por favor selecciona un usuario primero");
        return;
      }
      dispatch(login(selectedUserId));
      navigate("/task");
    } else {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <button className="log-button" onClick={handleClick}>
      {isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
    </button>
  );
};

export default LogButton;
