// import React from "react";
import logo from "@/assets/dorasilk-logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="py-5 flex items-center justify-between w-screen fixed top-0 left-0 px-25 bg-black z-50">
      <div>
        <img src={logo} alt="Dorasilk" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
