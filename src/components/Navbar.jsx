import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nav_logo from "../assets/nav_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.backgroundColor = "";
    }
  }, [isMenuOpen]);

  return (
    <div className="w-full flex justify-between items-center p-4 md:p-6 lg:p-8 z-50 h-28 relative">
      {/* Logo - Centered on Small Devices */}
      <div className="absolute left-[20%] transform -translate-x-[20%] md:static md:translate-x-0 md:left-auto md:flex md:justify-center">
        <Link to="/">
          <img src={nav_logo} alt="logo1" className="w-full h-10" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer ml-auto z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Fullscreen Overlay for Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white  flex flex-col justify-center p-8 gap-6 text-[18px] font-[500] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <p onClick={toggleMenu}>About </p>
        <p onClick={toggleMenu}>Resources</p>
        <Link to="/business" onClick={toggleMenu}>
          <p>For Business</p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-white text-[18px] font-[500]">
        <p>About Us</p>
        <p>Resources</p>
        <Link to="/business">
          <p>For Business</p>
        </Link>
      </div>

      {/* Buttons - Hidden on Small Devices */}
      <div className="hidden md:flex gap-2">
        <>
          <button className="bg-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="bg-inherit border border-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md text-[#A2DF00]">
            <Link to={"/signup"}>Sign Up</Link>
          </button>
        </>
      </div>
    </div>
  );
};

export default Navbar;
