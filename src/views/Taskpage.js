import "./Taskpage.css";
import Task from "../components/Task";
import Header from "../components/Header";
import Comments from "../components/Comments";
import React from "react";
import axios from "axios";

function Taskpage({
  isLoggedIn,
  setIsLoggedIn,
  selectedUserId,
  selectedNameId,
}) {
  const baseURL = "https://jsonplaceholder.typicode.com/posts";

  // Obtengo el array de posts
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className="Taskpage">
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        selectedUserId={selectedUserId}
        selectedNameId={selectedNameId}
      />
      <Task selectedUserId={selectedUserId} />
      <Comments selectedUserId={selectedUserId} />
    </div>
  );
}

export default Taskpage;
