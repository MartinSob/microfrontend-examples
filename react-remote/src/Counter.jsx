import React, { useState } from "react";

const Counter = () => {
    let [counter, setCounter] = useState(0)

    return (
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: react-remote</div>
        <div>Counter: {counter}</div>
        <button onClick={() => setCounter(++counter)}>Add</button>
      </div>
    );
}

export default Counter