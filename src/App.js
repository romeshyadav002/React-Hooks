import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserForm from "./components/10_custom_Hook/useInput_Hook/UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm />
      </header>
    </div>
  );
}

export default App;
