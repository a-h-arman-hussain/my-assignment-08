import React from "react";
import { NavLink } from "react-router";
import { IoLogoGithub } from "react-icons/io5";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 underline font-bold"
                    : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 underline font-bold"
                    : "text-black"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 underline font-bold"
                    : "text-black"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <div className="flex justify-center items-center ml-2 gap-1">
            <img className="w-6 h-6" src={logo} alt="" />
            <a className="text-xl font-bold text-purple-700">HERO.IO</a>
          </div>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-600 underline font-bold" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "text-purple-600 underline font-bold" : "text-black"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "text-purple-600 underline font-bold" : "text-black"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn bg-gradient-to-r from-purple-700  to-purple-300 text-white"
          href="https://github.com/dashboard"
        >
          {" "}
          <IoLogoGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
