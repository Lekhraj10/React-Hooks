import React, { useMemo } from "react";
import { useState } from "react";
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNum(num) {
    return Math.pow(num, 3)
  }
  
const result = useMemo(()=>cubeNum(number), [number]);

  return (
    <>
    <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
    <h1>Cube of No: {result}</h1>
    <button onClick={()=>{setCount(count+1)}}>Count ++</button>
    <h1>Counter: {count}</h1>
    
    </>     
  );
}


export default App;


