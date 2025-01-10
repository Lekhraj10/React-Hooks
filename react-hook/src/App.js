import React, { useEffect, useRef } from "react";
import { useState } from "react";
import './App.css'

function App() {
  const [value, setvalue] = useState(0);
  const count = useRef(0);

  useEffect(()=> {
    count.current = count.current + 1;
  })

  return (
    <>
    <button onClick={()=>{setvalue(prev=>prev-1)}}>-1</button>
    <h1>{value}</h1>
    <button onClick={()=>{setvalue(prev=>prev+1)}}>+1</button>
    <h1>Render Count: {count.current}</h1>
    </>     
  );
}


export default App;


