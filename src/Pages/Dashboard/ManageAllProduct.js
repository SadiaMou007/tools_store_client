import React, { useState, useEffect } from "react";

const ManageAllProduct = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://floating-cliffs-31659.herokuapp.com/bookings", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  //console.log(bookings);
  return (
    <div className="mx-12 mb-12">
      <h2 className="my-3 text-xl text-center">
        Total Order:{bookings.length}
      </h2>
      <div>
        <table class="table w-full">
          <thead>
            <tr>
              <th>User Info</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr>
                <td>{booking.userEmail}</td>
                <td>{booking.productName}</td>
                <td>{booking.quantity}</td>
                <td>{booking.total}</td>

                <td>
                  <button className="btn btn-primary btn-outline btn-xs disabled">
                    Unpaid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllProduct;
