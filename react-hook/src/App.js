import React from "react";
import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count=>count+1)
    setCount(count=>count+1)
  }


  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increaseCount}>Increase by 2</button>
    </>     
  );
}


export default App;


