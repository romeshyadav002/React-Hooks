import React, { useState } from "react";

export default function HookCounterTwo() {
  const intialCount = 0;
  const [count, setCount] = useState(0);
  //Note:- When you trying to update the state on the basis of previous state . Always use function with previous state in the setState
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count :{count}
      <button
        onClick={() => {
          setCount(intialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          incrementFive();
        }}
      >
        Increment Five
      </button>
    </div>
  );
}
