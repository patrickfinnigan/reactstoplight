import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Light } from "./Components/Light";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Light color="red" isActive="true" />
      <Light color="yellow" isActive="false" />
      <Light color="green" isActive="false" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);