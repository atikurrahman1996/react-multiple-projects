import { useState, useEffect } from "react";
import Watch from "./Watch";

const ParentWatch = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("watches.json") // watches.json file in the project directory public folder
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  // const watches = [
  //   { id: 1, name: "Apple Watch Series 7", price: 399 },
  //   { id: 2, name: "Samsung Galaxy Watch 4", price: 249 },
  //   { id: 3, name: "Fitbit Sense", price: 299 },
  //   { id: 4, name: "Garmin Venu 2", price: 349 },
  //   { id: 5, name: "Amazfit GTR 3 Pro", price: 229 },
  // ];

  return (
    <div>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </div>
  );
};

export default ParentWatch;
