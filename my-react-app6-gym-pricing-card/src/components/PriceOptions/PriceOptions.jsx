import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "1 free personal training session per month",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "4 free personal training sessions per month",
        "Locker room access",
        "Group fitness classes",
        "Sauna access",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Unlimited personal training sessions",
        "Locker room and towel service",
        "Group fitness classes",
        "Sauna and steam room access",
        "Free nutrition consultation",
        "Priority booking for classes",
      ],
    },
    {
      id: 4,
      name: "Elite",
      price: 99.99,
      features: [
        "Access to all gym locations",
        "Unlimited personal training sessions",
        "VIP locker room with towel and laundry service",
        "Exclusive group fitness classes",
        "Private sauna, steam room, and jacuzzi access",
        "Monthly body composition analysis",
        "Personalized workout plan and diet",
      ],
    },
  ];

  return (
    <div className="mr-12">
      <h2 className="text-5xl">Best price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
