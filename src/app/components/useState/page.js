"use client";
import React, { useState } from "react";
 
function ComponentUseState(props) {
  
  const [count, setcount]= useState(0);
 
  function incrementHandler(){
    setcount(count + 1)
  }

  function decrementHandler(){
    setcount(count - 1)
  }

  return (
    <>
    <button type="button" onClick={incrementHandler}>increment</button>
    {count}
    <button type="button" onClick={decrementHandler}>decrement</button>
    </>
  );
}

export default ComponentUseState;
