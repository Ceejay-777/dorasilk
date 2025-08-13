// import React from "react";
import { NavLink } from "react-router-dom";

const navList = [
  { label: "catalogue", to: "/catalogue" },
  { label: "shop", to: "/shop" },
  { label: "ritual access", to: "/ritual-access" },
  { label: "about us", to: "/about-us" },
];

const Navbar = () => {
  return (
    <nav className="flex gap-6 md:gap-12 items-center ">
      {navList.map((nav) => {
        return (
          <NavLink
            to={nav.to}
            className={({ isActive }) =>
              `font-medium text-xs sm:text-sm md:text-2xl uppercase text-white  underline-offset-8 hover:underline hover:-translate-y-2 duration-200 ease-in transition-transform text-nowrap ${
                isActive && "underline"
              }`
            }
          >
            {nav.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
