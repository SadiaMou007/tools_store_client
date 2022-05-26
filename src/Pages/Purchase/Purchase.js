import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const Purchase = () => {
  const [err, setErr] = useState("");
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const url = `https://floating-cliffs-31659.herokuapp.com/products/${id}`;
  const { data: product, isLoading } = useQuery("product", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { _id, name, price, quantity, description, image, minQuantity } =
    product;
  const handleSubmit = (e) => {
    e.preventDefault();
    const q = e.target.quantity.value;
    const userQ = parseInt(q);
    const total = userQ * price;

    if (userQ > quantity) {
      setErr("Order is greater than max quantity");
    } else if (userQ < minQuantity) {
      setErr("Order is less than minimum quantity");
    } else {
      setErr("");
      const order = {
        userEmail: user?.email,
        address: e.target.address.value,
        phone: e.target.phone.value,
        productId: id,
        productName: name,
        quantity: userQ,
        total: total,
      };
      // console.log(order);
      fetch("https://floating-cliffs-31659.herokuapp.com/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },

        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Booking added");
        });
    }
  };

  return (
    <div className="min-h-screen mx-12">
      <div className="mt-12 grid lg:grid-cols-2 md:row-cols-1">
        <div>
          {" "}
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-1 gap-3 justify-items-center pt-3"
          >
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Order quantity"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <p className="text-error">{err}</p>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-outline w-full max-w-xs"
            />
          </form>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
