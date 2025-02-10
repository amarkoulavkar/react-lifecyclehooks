"use client";
import React, { useState, useEffect, useRef } from "react";
 
function ComponentuseRef(props) {
  
  const [count, setcount]= useState(0);
  const [inputVal, seInputVal] = useState(0) 
   const valUseRef = useRef(10);
   const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
    marginTop: '20px',
  };

  useEffect(()=>{
    
const tiemInterval = setInterval(function(){
  console.log("timedfsdfd started callingin useeffect")
 
}, 1000)


return()=>{
  clearTimeout(tiemInterval);
}
  }, [inputVal])
 
  function incrementHandler(){
    setcount(count + 1)
    valUseRef.current.focus();
  }

  function decrementHandler(){
    setcount(count - 1)
  }

  function onInputChangeHandler(event){
    console.log("input change")
    seInputVal(event.target.value)
  }

  return (
    <>
    <button type="button" onClick={incrementHandler}>increment</button>
    {count}
    <button type="button" onClick={decrementHandler}>decrement</button>
 
    <input type="text" value={inputVal} style={inputStyle} onChange={onInputChangeHandler} />

    <input type="text" ref={valUseRef}   style={inputStyle}/>
    </>
  );
}

export default ComponentuseRef;
