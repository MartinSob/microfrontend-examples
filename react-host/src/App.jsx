import React from "react";
import ReactDOM from "react-dom";
import Counter from 'reactRemote/Counter'

import "./index.scss";

const App = () => {

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <Counter />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
