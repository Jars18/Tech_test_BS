import { useState, useEffect } from "react";
import ExpandList from "./ExpandList"; // Asegúrate de importar ExpandList
import "./Comments.css"; // Asegúrate de tener un archivo CSS para estilos

function Comments({ selectedUserId }) {
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(Number(selectedUserId));

  const fetchComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setSelectedPostId(postId);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  useEffect(() => {
    fetchComments(Number(selectedUserId));
  }, []);

  return (
    <div className="comment-section">
      <h4>Comentarios</h4>
      <ExpandList
        items={comments}
        initialItems={1}
        renderItem={(comment) => (
          <>
            <strong>{comment.name}</strong>({comment.email})
            <p>{comment.body}</p>
          </>
        )}
        listClassName="comment-list"
        itemClassName="comment-item"
      />
    </div>
  );
}

export default Comments;
