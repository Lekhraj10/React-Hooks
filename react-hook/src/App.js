
import { useCallback, useState } from "react";
import './App.css'
import Header from "./components/Header";

function App() {
const [count, setCount] = useState(0);

const newFunction = useCallback(()=>{},[])

  return (
    <>
    <Header newFn={newFunction}/>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>Click here</button>
  
    </>     
  );
}


export default App;


