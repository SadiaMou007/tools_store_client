import React, { useState, useEffect } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);
  return (
    <div className="my-6 mx-12 p-3">
      <h2 className="my-3 text-center text-3xl">
        AVAILABLE TOOLS: {products.length}
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
        {products.map((product) => (
          <Tool product={product} key={product._id}></Tool>
        ))}
      </div>
      <div className="flex justify-end w-full">
        {" "}
        <button className="btn btn-outline border-info">SEE ALL</button>
      </div>
    </div>
  );
};

export default Tools;
