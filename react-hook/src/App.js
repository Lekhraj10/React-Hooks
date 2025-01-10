import React from "react";
import { useState } from "react";
import './App.css'

function App() {
  const [car, setCar] = useState({
    brand : "Eco Van",
    model: "Maruti",
    year: "2015",
    color: "blue"
  });

  const changeColor = ()=> {
    setCar((car)=> {
      return {...car, color: "white"}
    })
  }

  return (
    <>
    <h1>My {car.brand}</h1>
    <h2>It is {car.color} color with {car.model} model and built in {car.year} year..</h2>
    <button onClick={changeColor}>White</button>
    </>     
  );
}
export default App;
