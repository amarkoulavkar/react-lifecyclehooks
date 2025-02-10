"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
  forwardRef
} from "react";
import CountContext from "../countcontext";

/**
 * 
 * @param {*} useContext 
 * @returns 
 *  
 
 */

function ComponentChild(props, ref) {
  const cardStyleChild = {
    backgroundColor: "#e2e2e2",
    width: "400px",
    height: "200px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
    flexDirection: "column",
    margin: "10px auto",
  };
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <div style={cardStyleChild}>
        <p>
          child Count :
          <span ref={ref} className="bg-red-dark m-2 inline-block rounded border border-transparent py-1 px-2.5 text-xs font-medium text-white">
            {count}
          </span>
          <a
            onClick={() => {
              setCount(count + 1);
            }}
            className="bg-dark dark:bg-dark-2 border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
          >
            Increment
          </a>
        </p>
      </div>
    </>
  );
}

export default forwardRef(ComponentChild);
