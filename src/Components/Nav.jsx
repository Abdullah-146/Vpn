import React, { useEffect, useState } from "react";
import MainLogo from "../assets/MainLogo.svg";
import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [links, setLinks] = useState(["Home", "AboutUs", "Services", "Plans"]);
  const [selectedLink, setSelectedLink] = useState("Home");

  const [hoverLink, setHoverLink] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedLink("Home");
    } else {
      setSelectedLink(location.pathname.slice(1));
    }
  }, [location]);

  return (
    <div className="flex justify-between px-3  lg:px-10 z-10">
      <div className="flex  items-center">
        <img src={MainLogo} alt="" />
        <p className="font-heading text-primary text-2xl ml-4 whitespace-nowrap mr-3  ">
          Current <span className="font-normal">VPN</span>
        </p>
      </div>
      <div className="items-center space-x-4 hidden lg:flex  ">
        {links.map((link, index) => {
          return (
            <NavLink
              to={`/${link}`}
              key={link}
              className={`cursor-pointer   p-1 rounded-lg     `}
              onMouseOver={() => setHoverLink(link)}
              onMouseOut={() => setHoverLink("")}
              onClick={() => setSelectedLink(link)}
            >
              <p
                className={`font-subHeading text-lg ${
                  hoverLink === link || selectedLink === link
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                {link}
              </p>
            </NavLink>
          );
        })}
      </div>
      <NavLink
        className="py-5 px-8 flex justify-center items-center rounded-lg"
        to={`/Login`}
      >
        <p className="font-heading text-primary text-xl ml-4">Register</p>
      </NavLink>
    </div>
  );
}

export default Nav;
