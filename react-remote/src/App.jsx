import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

import "./index.scss";

const App = () => {
  return (
    <Counter/>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
