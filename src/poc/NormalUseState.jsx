import React, { useState } from "react";

function NormalUseState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementBy5 = () => {
    setCount(count + 5);
  };
  const decrementBy5 = () => {
    setCount(count - 5);
  };
  return (
    <div>
      <p>Counter: {count} </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementBy5}>+5</button>
      <button onClick={decrementBy5}>-5</button>
    </div>
  );
}

export default NormalUseState;
