import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>404: Page not found</h2>
      <p>
        The page you're looking for doesn't exist. Please visit the correct url
      </p>
    </div>
  );
};

export default Error;
