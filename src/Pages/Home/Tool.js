import React from "react";
import { useNavigate } from "react-router-dom";
const Tool = ({ product }) => {
  const { _id, name, price, quantity, description, image, minQuantity } =
    product;
  const navigate = useNavigate();
  const navigateDetails = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl p-3 my-auto ">
        <figure>
          <img src={image} alt="Album" className="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p className="font-bold">
            Price:<span className="text-primary text-2xl">${price}</span>
          </p>
          <p className="font-bold">Available: {quantity}</p>
          <p className="font-bold">Minimum order quantity:{minQuantity}</p>
          <div class="card-actions justify-start">
            <button
              class="btn btn-primary btn-outline"
              onClick={() => navigateDetails(_id)}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
