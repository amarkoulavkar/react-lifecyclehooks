"use client";
import React, { useState, useTransition } from "react";
import getProducts from "./data";

function ComponentUseTransition(props) {
  const [filterTerm, setFilterdata] = useState("");
  const productList = getProducts();

  const [isPending, startTransition] = useTransition();

  function filterProducts(param) {
    if (!param) {
      return productList;
    }
    const test = productList.filter((element) => element.name.includes(param));
    return test;
  }

  const filteredProducts = filterProducts(filterTerm);

  function filterProdHandler(event) {
    startTransition(() => {
      setFilterdata(event.target.value);
    });
  }

  return (
    <>
      <input type="text" onChange={filterProdHandler} />
      {isPending ? (
        <div>loading</div>
      ) : (
        <ul>
          {filteredProducts?.map((element) => {
            return <li>{element.name}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default ComponentUseTransition;
