import React from "react";
import { toast } from "react-toastify";

const MakeAdminRow = ({ singleUser, index, refetch }) => {
  const makeAdmin = () => {
    const email = singleUser.email;
    const url = `http://localhost:5000/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          console.log(data);
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{singleUser._id}</td>
      <td>{singleUser.email}</td>
      <td>
        {singleUser?.role ? (
          <p className="text-success">ADMIN</p>
        ) : (
          <button
            className="btn btn-success btn-outline btn-sm"
            onClick={makeAdmin}
          >
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
