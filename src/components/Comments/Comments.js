import { useState, useEffect } from "react";
import ExpandList from "../ExpandList/ExpandList";
import axios from "axios";
import "./Comments.css";

function Comments({ selectedUser }) {
  const [comments, setComments] = useState([]);
  //Comentarios del usuario seleccionado
  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error al obtener comentarios:", error);
    }
  };

  useEffect(() => {
    if (selectedUser?.id) {
      fetchComments(Number(selectedUser.id));
    }
  }, [selectedUser.id]);
  //Muestro 1 comentario, lo demas es expandible
  return (
    <div className="comment-section">
      <h4>Comentarios</h4>
      <ExpandList
        items={comments}
        initialItems={1}
        renderItem={(comment) => (
          <>
            <strong>{comment.name}</strong> ({comment.email})
            <p>{comment.body}</p>
          </>
        )}
      />
    </div>
  );
}

export default Comments;
