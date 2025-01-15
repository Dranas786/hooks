import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  return (
    <div>
      <button>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  );
}

export default App;
