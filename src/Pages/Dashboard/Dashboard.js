import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin.js";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (admin) {
    console.log(admin);
  } else {
    console.log("not admin");
  }

  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-3xl my-4 text-center shadow-lg p-2">
          WELCOME BACK!
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-200 rounded  text-base-content">
          {/* <!-- Sidebar content here -->*/}
          <li>
            <Link to={"/dashboard"}>DASHBOARD</Link>
          </li>

          <li>
            <Link to={"/dashboard/profile"}>MY PROFILE</Link>
          </li>
          <li>{!admin && <Link to={"/dashboard/myOrder"}>MY ORDER</Link>}</li>
          <li>
            {!admin && <Link to={"/dashboard/addReview"}>ADD REVIEW</Link>}
          </li>
          <li>
            {admin && <Link to={"/dashboard/makeAdmin"}>MAKE ADMIN</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
