import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://floating-cliffs-31659.herokuapp.com/booking?user=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  console.log(orders);
  return <div>MyOrder:{orders?.length} </div>;
};

export default MyOrder;
