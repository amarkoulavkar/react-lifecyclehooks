"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
 

/**
 * 
 * @param {*} useCallback 
 * @returns 
 *  
 
 */

function ComponentuseCallback(props) {
  
  const [count, setcount]= useState(0);
  const [inputVal, seInputVal] = useState(0) 
    
   const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
    marginTop: '20px',
  };

  
const factorial = useRef(0);
useMemo(()=>{
  factorial.current = calculateFacto(count);
}, [count])
 
 
  function incrementHandler(){
    setcount(count + 1)
  
  }

  function decrementHandler(){
    setcount(count - 1)
  }

  function onInputChangeHandler(event){
  //  console.log("input change")
    seInputVal(event.target.value)
  }

 

 const callBakcTest =  useCallback(()=>{
    return inputVal;
  }, [inputVal])

  return (
    <>
    <button type="button" onClick={incrementHandler}>increment</button>
    {count}
    <button type="button" onClick={decrementHandler}>decrement</button>
 
    <input type="text" value={inputVal} style={inputStyle} onChange={onInputChangeHandler} />
<hr></hr>
  
  <DisplayName callBakcTest={callBakcTest}></DisplayName>
    {factorial.current}
    </>
  );
}

function calculateFacto(val){
//console.log("calculateFacto")
  let i = 0;
while(i < 1000000000) i++ ; 

  if(val === 0 || val === 1){
    return 1;
  }

  if(val < 0 )  return val * calculateFacto(val + 1)
    return val * calculateFacto(val - 1)
}


const DisplayName =  ({callBakcTest}) =>{

const [value, setValue] = useState("")

useEffect(() =>{
    setValue(callBakcTest())
    console.log("display component rendered");
}, [callBakcTest])
  return(
    <>
    <p><b>{value}</b></p>
    </>
  )
}

export default ComponentuseCallback;
