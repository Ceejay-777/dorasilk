// import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-14 items-center ">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-medium text-2xl uppercase text-white  underline-offset-8 hover:underline hover:-translate-y-2 duration-200 ease-in transition-transform ${
            isActive && "underline"
          }`
        }
      >
        catalogue
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-medium text-2xl uppercase text-white  underline-offset-8 duration-200 ease-in transition-transform hover:underline hover:-translate-y-2 ${
            isActive && "underline"
          }`
        }
      >
        shop
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-medium text-2xl uppercase text-white  underline-offset-8 duration-200 ease-in transition-transform hover:underline hover:-translate-y-2 ${
            isActive && "underline"
          }`
        }
      >
        ritual access
      </NavLink>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-medium text-2xl uppercase text-white  underline-offset-8 duration-200 ease-in transition-transform hover:underline hover:-translate-y-2 ${
            isActive && "underline"
          }`
        }
      >
        about us
      </NavLink>
    </nav>
  );
};

export default Navbar;
