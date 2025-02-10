"use client";
import React, { useState, useEffect } from "react";
 
function ComponentUseEffect(props) {
  
  const [count, setcount]= useState(0);
  const [inputVal, seInputVal] = useState(0) 

  useEffect(()=>{
    
const tiemInterval = setInterval(function(){
  console.log("time started callingin useeffect")
}, 1000)


return()=>{
  clearTimeout(tiemInterval);
}
  }, [inputVal])
 
  function incrementHandler(){
    setcount(count + 1)
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

    <input type="text" value={inputVal} onChange={onInputChangeHandler} />
    </>
  );
}

export default ComponentUseEffect;
