import React, { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";

const Cousin = ({ name }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <p>has:{gift}</p>
    </div>
  );
};

export default Cousin;
