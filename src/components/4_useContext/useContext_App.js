import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"codeValuation"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
