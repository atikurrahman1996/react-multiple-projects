import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2> Opps!!! 404! Not found, Please visit the correct url </h2>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;
