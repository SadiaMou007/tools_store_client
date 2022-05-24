import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <NavLink to={"/home"} className="font-serif">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"} className="me-1 font-serif">
          BLOGS
        </NavLink>
      </li>

      <li>
        <NavLink to={"/purchase"} className="font-serif me-1">
          PURCHASE
        </NavLink>
      </li>
      <li className="mx-3">
        {user ? (
          <button
            className="btn btn-neutral text-white font-serif"
            onClick={logout}
          >
            LOGOUT
          </button>
        ) : (
          <NavLink to={"/login"} className={"font-serif"}>
            LOGIN
          </NavLink>
        )}
      </li>
      <span className="my-auto"> {user?.email}</span>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl text-primary font-serif">
          TOOLS STORE
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
