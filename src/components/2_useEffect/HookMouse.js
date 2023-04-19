import React, { useEffect, useState } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse events");
    setX(e.clientX);
    setY(e.clientY);
  };
  //without dependency Array useEffect will be called at every render
  // with empty dependecy array useEffect will be called at intial render
  // with filled dependecy array useEffect will be called each time element in array will change
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component Unmounting");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
