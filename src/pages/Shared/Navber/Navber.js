import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navber = () => {
  const [user, loading] = useAuthState(auth);

  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-accent text-white" : "")}
          to={"/home"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-accent text-white" : "")}
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-accent text-white" : "")}
          to={"/appointment"}
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-accent text-white" : "")}
          to={"/reviews"}
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-accent text-white" : "")}
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-accent text-white" : ""
            }
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        {user ? (
          <button
            onClick={() => {
              window.localStorage.removeItem("accessToken");
              signOut(auth);
            }}
            className="btn btn-outline border-0"
          >
            LOGOUT
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-accent text-white" : ""
            }
            to={"/login"}
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar">
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
        <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navber;
