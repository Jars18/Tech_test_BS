import "./Taskpage.css";
import Task from "../components/Task/Task";
import Header from "../components/Header/Header";
import Comments from "../components/Comments/Comments";
import { useSelector } from "react-redux";

function Taskpage() {
  const selectedUser = useSelector((state) => state.user);
  return (
    <div className="Taskpage">
      <Header selectedUser={selectedUser} />
      <Task selectedUser={selectedUser} />
      <Comments selectedUser={selectedUser} />
    </div>
  );
}

export default Taskpage;
