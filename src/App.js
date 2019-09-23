import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState({ times: 0 });
  const onCountClick = () => {
    return setCount({ times: count.times + 10 });
  };

  return (
    <div>
      <p>You clicked {count.times} times</p>
      <button onClick={onCountClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
