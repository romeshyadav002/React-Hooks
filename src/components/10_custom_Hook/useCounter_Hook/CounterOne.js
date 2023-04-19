import React, { useState } from "react";
import useCounter from "./useCounter";

export default function CounterOne() {
  //   const intialCount = 0;
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };
  //   const decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };
  //   const reset = () => {
  //     setCount(intialCount);
  //   };
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h2>Count :{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
