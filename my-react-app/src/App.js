import React, { useState } from "react";

function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { count: prevState.count + 1, theme: prevState.theme };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span style={{ background: state.theme }}>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
