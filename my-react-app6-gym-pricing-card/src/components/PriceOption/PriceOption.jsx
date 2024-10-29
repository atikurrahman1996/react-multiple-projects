import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-blue-500 rounded-md p-4 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-center">
          <span className="text-4xl font-extrabold">${price}</span>
          <span className="text-2xl">/month</span>
        </h2>
        <h3 className="text-2xl text-center font-semibold">{name}</h3>
        <ul className="mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-xl">
              <FaCheck className="text-green-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Buy Now button at the bottom */}
      <div className="mt-auto">
        <button className="w-full bg-green-500 text-white font-bold rounded-md py-2 mt-4 hover:bg-green-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
