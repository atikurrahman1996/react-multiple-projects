import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();

  // navigate back
  const navigate = useNavigate();

  const { id, title, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2> Post detail: {id}</h2>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <button onClick={handleGoBack}> Go back</button>
    </div>
  );
};

export default PostDetail;
