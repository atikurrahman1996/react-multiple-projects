import React from "react";
import SpecialPerson from "../SpecialPerson/SpecialPerson";

const MySelf = () => {
  return (
    <div>
      <h2>Myself: </h2>
      <section className="flex">
        <SpecialPerson></SpecialPerson>
      </section>
    </div>
  );
};

export default MySelf;
