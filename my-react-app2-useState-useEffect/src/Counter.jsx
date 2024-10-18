import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div style={{ border: "4px solid yellow" }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}> Add</button>
      <button onClick={handleReduce}> Reduce</button>
    </div>
  );
}

export default Counter;

//useState example
