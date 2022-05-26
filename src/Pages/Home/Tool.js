import React from "react";

const Tool = ({ product }) => {
  const { name, price, quantity, description, image, minQuantity } = product;
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl p-3">
        <figure>
          <img src={image} alt="Album" className="h-48" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name} {minQuantity}
          </h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
