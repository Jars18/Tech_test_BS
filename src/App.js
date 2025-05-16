import "./App.css";
import Homepage from "./views/Homepage";
import Taskpage from "./views/Taskpage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedNameId, setSelectedNameId] = useState(null);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Homepage
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            selectedNameId={selectedNameId}
            setSelectedNameId={setSelectedNameId}
          />
        }
      />
      <Route
        path="/task"
        element={
          <Taskpage
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            selectedUserId={selectedUserId}
            selectedNameId={selectedNameId}
          />
        }
      />
    </Routes>
  );
}

export default App;
