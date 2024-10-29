import React, { createContext } from "react";
import "./GrandPa.css";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const AssetContext = createContext("gold");

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h1 className="font-extrabold">Grandpa</h1>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;
