import React, { useState, useEffect } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //useEffect runs after the 1st render and after every update inshorts after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}
