import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, id, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "2px",
    borderRadius: "20px",
    margin: "25px",
  };

  return (
    <div style={userStyle}>
      <h1>{name}</h1>
      <p>Email is: {email}</p>
      <p>Phone number: {phone}</p>
      <Link to={`/user/${id}`}> Show details</Link>
      <br />
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
    </div>
  );
};

export default User;
