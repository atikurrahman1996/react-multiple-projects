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
    </div>
  );
};

export default User;
