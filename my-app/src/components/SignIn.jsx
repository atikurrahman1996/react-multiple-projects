const SignIn = () => {
  return (
    <div>
      <h2>This is Sign-In page</h2>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
