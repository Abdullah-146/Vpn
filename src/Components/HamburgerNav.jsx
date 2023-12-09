import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import MainLogo from "../assets/MainLogo.svg";


function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (isOpen && !event.target.closest(".sidebar")) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [isOpen]);

  return (
    <div className="lg:hidden mobile:flex z-10">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-4 focus:outline-none"
      >
        <HiMenu className="h-8 w-8" />
      </button>
      <aside
        className={`fixed lg:relative top-0 left-0 lg:static bg-black h-screen w-60 lg:w-16 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ` }
      >
        <ul className="flex flex-col items-center gap-10 mt-10 text-white text-xl justify-between w-full p-3">
        <li>
            <Link to={"/"}>
              <img src={MainLogo} alt="" />
            </Link>
          </li>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li className="text-white text-xl">
            <NavLink to="/AboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/Services">Solutions</NavLink>
          </li>
          <li>
            <NavLink to="/Plans">Services</NavLink>
          </li>
         
          <li className="hidden text-primary lg:block">
            <NavLink to="/overseas">Contact Sales</NavLink>
          </li>
          <li>
            <Link
              to="/Login"
              className=" p-3 px-5 border-2 border-primary text-primary rounded-2xl hover:translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out"
            >
                Login
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default HamburgerNav;