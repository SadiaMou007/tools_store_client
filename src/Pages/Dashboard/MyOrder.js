import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://floating-cliffs-31659.herokuapp.com/booking?user=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  console.log(orders);
  return <div>MyOrder: {orders.length}</div>;
};

export default MyOrder;
