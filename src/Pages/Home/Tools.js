import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import Tool from "./Tool";

const Tools = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://floating-cliffs-31659.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);
  if (products?.length === 0) {
    return <Loading />;
  }
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
      <div className="flex justify-center mt-3 mb-6 w-full">
        {" "}
        <button className="btn btn-primary btn-outline font-bold w-1/4">
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Tools;
