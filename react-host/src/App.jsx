import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ProcedureBackoffice from 'procedureBackoffice/App'

import "./index.scss";

const App = () => {

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <ProcedureBackoffice />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
