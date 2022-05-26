import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const url = "https://floating-cliffs-31659.herokuapp.com/user";
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch(url, {
      method: "GET",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="p-6">
      <h2 className="mb-2">Total User: {user.length}</h2>
      <div>
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, index) => (
              <MakeAdminRow
                key={u._id}
                singleUser={u}
                index={index}
                refetch={refetch}
              ></MakeAdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
