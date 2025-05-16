import "./Homepage.css";
import home from "../assets/home.png";
import Dropdown from "../components/Dropdown";
import LogButton from "../components/LogButton";
import Taskpage from "./Taskpage";
import { Routes, Route } from "react-router-dom";

function Homepage({
  isLoggedIn,
  setIsLoggedIn,
  selectedUserId,
  setSelectedUserId,
  selectedNameId,
  setSelectedNameId,
}) {
  const handleUserChange = (userId, userName) => {
    setSelectedUserId(userId);
    setSelectedNameId(userName);
  };

  return (
    <div className="Homepage">
      <div className="homepage-content">
        <img src={home} />
        <h1>Bienvenido a To Do's List</h1>
        <div className="account-selection">
          <h3>Selecciona tu cuenta</h3>
          <Dropdown
            selectedUserId={selectedUserId}
            selectedNameId={selectedNameId}
            onUserChange={handleUserChange}
          />
        </div>

        <LogButton
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          selectedUserId={selectedUserId}
        />
      </div>
    </div>
  );
}

export default Homepage;
