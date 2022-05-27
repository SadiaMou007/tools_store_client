import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2btiBcjbCApLFSzNEfZQMUDQZ7ZduhoqMdcdyHnS2AuLR1UBVWokgi9glQP9kDSLtMAYxTMrv7zYV6PPXDEMXu0064C0qOpI"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: booked, isLoading } = useQuery("booked", () =>
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
  // console.log(booked);
  return (
    <div className="min-h-screen">
      <div className="text-center my-3 text-xl shadow-xl p-3 w-3/4 mx-auto">
        <h2 className="text-primary">Hello {booked.userEmail}</h2>
        <h2>Your order for : {booked.productName}</h2>
        <h2>Total bill : ${booked.total}</h2>
      </div>
    </div>
  );
};

export default Payment;
