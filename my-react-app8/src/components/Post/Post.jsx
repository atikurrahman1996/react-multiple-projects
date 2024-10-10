import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  // to redirect to different route

  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid yellow",
    padding: "2px",
    borderRadius: "20px",
    margin: "25px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h2>User Id is: {id} </h2>
      <p>User title is: {title}</p>
      <Link to={`/post/${id}`}>Post details </Link>
      <br />

      <Link to={`/post/${id}`}>
        <button>Click Me</button>
      </Link>
      <br />
      <button onClick={handleShowDetail}> Click to see details</button>
    </div>
  );
};

export default Post;
