import "./styles.css";
import React from 'react';
import { useState } from "react/cjs/react.production.min";
 
const App=()=> {
  const state=useState();
  const [count,setCount]=useState(0);

  //console.log(state);
  
    const IncNum=()=>{
      setCount(count+1);
     
    };
  return (
    <>
         <h1>{count}</h1>
         <button onClick={IncNum}>Click me</button>
    </>
  );
}

export default App;
