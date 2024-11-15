import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MainLogo from "../assets/MainLogo.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Discord from "../assets/Discord.svg";
import Facebook from "../assets/Facebook.svg";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex-1 flex flex-col bg-transparent md:bg-Footer bg-[length:100%] object-fill bg-no-repeat bg-center space-y-3 bg-white">
      {/* div of height 1 with bg white */}
      <div className="h-1  mb-7"></div>
      <div className="self-center relative top-7">
        <KeyboardArrowUpIcon />
      </div>
      <div className="flex flex-col md:flex-row justify-around container relative top-16 ">
        <div className="flex-1 flex flex-col ">
          <div className="w-[80%] self-center space-y-3">
            <div className="flex flex-row items-center space-x-3">
              <img src={MainLogo} alt="logo" />
              <p className="font-heading text-heading">
                Current <span className="font-simple">VPN</span>
              </p>
            </div>
            <p className="font-simple text-simple w-3/4 text-center md:text-start">
              A cutting-edge service designed for lightning-fast and stable
              internet connections. With an unwavering commitment to speed, this
              VPN company ensures seamless browsing and streaming experiences
              for users.
            </p>
            <div className="flex flex-row items-center space-x-3">
              <a
                href="https://www.instagram.com/currentvpnofficial?igsh=MTl1aW5qZ3NhcWV4NQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center space-x-3"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
              </a>

              <a
                href="http://Facebook.com/currentvpn"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center space-x-3"
              >
                <img src={Twitter} alt="twitter" className="cursor-pointer" />
              </a>
              <a
                href="https://discord.gg/Rbh6PJSn"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center space-x-3"
              >
                <img src={Discord} alt="youtube" className="cursor-pointer" />
              </a>
              <a
                href="http://Facebook.com/currentvpn"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center space-x-3"
              >
                <img src={Facebook} alt="facebook" className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-start md:flex-row justify-around">
          <div className="flex flex-col space-y-3">
            <p className="font-heading text-heading">Products</p>

            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For PC
            </p>

            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN IOS
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For Chrome
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="font-heading text-heading">VPN Info</p>

            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              What is a VPN
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For Gaming
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For Streaming
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For Resources
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="font-heading text-heading">Help</p>
            <p
              className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer"
              onClick={() => {
                window.location.href = "mailto:Support@currentvpn.io";
              }}
            >
              Support
            </p>
            <NavLink to="/ContactUs">
              <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
                Contact Us
              </p>
            </NavLink>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              Business VPN
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              FAQ
            </p>
            <NavLink to="/TermsAndConditions">
              <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
                Terms and Conditions
              </p>
            </NavLink>
            <NavLink to="/PrivacyPolicy">
              <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
                Privacy Policy
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(80deg, #4ECAFF 0%, #0071FF 50%, #0066E7 100%)",
        }}
        className="w-full flex flex-row items-center justify-around  relative top-20 text-white p-3"
      >
        <StarPurple500Icon />
        <p className="font-simple text-simple text-white">
          2024 ©️ CurrentVpn | All Rights Reserved
        </p>
        <StarPurple500Icon />
      </div>
    </div>
  );
};

export default Footer;
