import "./App.css";
import Homepage from "./pages/Homepage";
import Taskpage from "./pages/Taskpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/task" element={<Taskpage />} />
    </Routes>
  );
}

export default App;
