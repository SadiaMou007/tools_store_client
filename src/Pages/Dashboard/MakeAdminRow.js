import React from "react";

const MakeAdminRow = ({ singleUser, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{singleUser._id}</td>
      <td>{singleUser.email}</td>
      <td>
        <button className="btn btn-success btn-outline btn-sm">
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default MakeAdminRow;
