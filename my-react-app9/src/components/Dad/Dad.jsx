import React from "react";
import MySelf from "../MySelf/MySelf";
import Brothers from "../Brothers/Brothers";
import Sisters from "../Sisters/Sisters";

const Dad = () => {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <MySelf></MySelf>
        <Brothers></Brothers>
        <Sisters></Sisters>
      </section>
    </div>
  );
};

export default Dad;
