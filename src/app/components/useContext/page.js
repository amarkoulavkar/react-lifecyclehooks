"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
} from "react";
import ComponentChild from "./child/page";
import countcontext from "./countcontext";

/**
 * 
 * @param {*} useContext 
 * @returns 
 *  
 
 */

function ComponentUseContext(props) {
  const cardStyle = {
    backgroundColor: "gray",
    width: "500px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
    flexDirection: "column",
    margin: "auto",
  };
  const [count, setCount] = useState(0);
  let counterRef = useRef(null) 

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function forwordRefCounter(){
    counterRef.current.color = "red";
  }

  return (
    <>
      <div style={cardStyle}>
        Parent component
        <a
          onClick={() => { increment(); forwordRefCounter(); }  }
          className="bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
        >
          Increment
        </a>
        <span  className="bg-red-dark m-2 inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
          {count}
        </span>
        <a
          onClick={decrement}
          className="bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
        >
          Decrement
        </a>
        <countcontext.Provider value={ {count, setCount } }>
          <ComponentChild  ref={counterRef}/>
        </countcontext.Provider>
      </div>
    </>
  );
}

export default ComponentUseContext;
