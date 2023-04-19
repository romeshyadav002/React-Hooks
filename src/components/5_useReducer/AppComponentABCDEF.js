//this is the App.js file while working on example of using useReducer and useContext in situation
import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/5_useReducer/ComponentA";
import ComponentB from "./components/5_useReducer/ComponentB";
import ComponentC from "./components/5_useReducer/ComponentC";

export const CountContext = React.createContext();

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </header>
      </div>
    </CountContext.Provider>
  );
}

export default App;
