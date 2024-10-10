import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const postStyle = {
    border: "2px solid yellow",
    padding: "2px",
    borderRadius: "20px",
    margin: "25px",
  };

  return (
    <div style={postStyle}>
      <h2>User Id is: {id} </h2>
      <p>User title is: {title}</p>
      <Link to={`/post/${id}`}>Post details </Link>

      <Link to={`/post/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default Post;
