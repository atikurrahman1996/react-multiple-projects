import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [phones, setPhone] = useState([]);

  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //       .then((res) => res.json())
  //       .then((data) => setPhone(data.data));
  //   }, []);

  //using Axios

  useEffect(() => {
    axios("https://openapi.programming-hero.com/api/phones?search=iphone").then(
      (data) => setPhone(data.data.data)
    );
  }, []);

  return (
    <div>
      <h2 className="text-3xl">Total number of phones: {phones.length}</h2>
    </div>
  );
};

export default Fetch;
