import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2> Post detail: {id}</h2>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostDetail;
