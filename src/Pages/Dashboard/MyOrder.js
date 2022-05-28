import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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
  }, [user.email, orders]);

  const handleDelete = (order) => {
    const { _id } = order;
    const id = _id;
    const url = `http://localhost:5000/booking/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delete successfull!");
      });
  };

  return (
    <div>
      <h2 className="text-xl text-center my-3">
        Total Order: {orders?.length}
      </h2>
      <div>
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>
                  <button
                    className="btn btn-error btn-outline btn-xs mx-3"
                    onClick={() => handleDelete(order)}
                  >
                    CANCEL
                  </button>

                  <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-xs btn-error btn-outline">
                      PAY
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
