import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { AssetContext } from "../GrandPa/Grandpa";

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"ShahinSha"}></Cousin>
        <Cousin name={"SalmanSha"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
