import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import './Header.css'

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-slate-300 mb-5 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className=" btn-ghost normal-case text-lg font-bold font-black"
          >
            Bangla Bazar & Restaurant
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center">
            <div>
              <label className="btn btn-ghost btn-circle avatar">
                {user && (
                  <div className="w-24 rounded-full profiles__group">
                    <img src={user?.photoURL || "https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg"} alt='' />
                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                  </div>
                )}
              </label>



            </div>
            <div className="ms-2 mr-3">
              {user ? (
                <button onClick={handleLogOut}>LogOut</button>
              ) : (
                <Link to="/login">login</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

