import React, { useContext } from "react";
import { AssetContext } from "../GrandPa/Grandpa";

const SpecialPerson = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Special Person</h2>
      <p>has: {gift}</p>
    </div>
  );
};

export default SpecialPerson;
