import React, { useState } from "react";
import MainLogo from "../assets/MainLogo.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  const [links, setLinks] = useState(["Home", "About Us", "Services", "Plans"]);
  const [selectedLink, setSelectedLink] = useState("Home");
  const [hoverLink, setHoverLink] = useState("");

  return (
    <div className="flex justify-between px-3  lg:px-10">
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
              className={`cursor-pointer  ${
                selectedLink === link ? "" : ""
              } p-1 rounded-lg     `}
              onClick={() => setSelectedLink(link)}
              onMouseOver={() => setHoverLink(link)}
              onMouseOut={() => setHoverLink("")}
            >
              <p
                className={`font-subHeading text-lg ${
                  hoverLink === link || selectedLink == link
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
