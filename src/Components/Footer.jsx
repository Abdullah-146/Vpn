import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MainLogo from "../assets/MainLogo.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";
import Facebook from "../assets/Facebook.svg";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

const Footer = () => {
  return (
    <div className="flex-1 flex flex-col bg-Footer object-fill bg-no-repeat bg-center space-y-3 ">
      <div className="self-center relative top-7">
        <KeyboardArrowUpIcon />
      </div>
      <div className="flex flex-col md:flex-row justify-around p-5 relative top-16 ">
        <div className="flex-1 flex flex-col ">
          <div className="w-[80%] self-center space-y-3">
            <div className="flex flex-row items-center space-x-3">
              <img src={MainLogo} alt="logo" />
              <p className="font-heading text-heading">
                Current <span className="font-simple">VPN</span>
              </p>
            </div>
            <p className="font-simple text-simple w-3/4 text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim...
            </p>
            <div className="flex flex-row items-center space-x-3">
              <img src={Instagram} alt="instagram" className="cursor-pointer" />
              <img src={Twitter} alt="twitter" className="cursor-pointer" />
              <img src={Youtube} alt="youtube" className="cursor-pointer" />
              <img src={Facebook} alt="facebook" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-start md:flex-row justify-around">
          <div className="flex flex-col space-y-3">
            <p className="font-heading text-heading">Products</p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For Mac
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For PC
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              Free VPN Download
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN IOS
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For Chrome
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN For TV
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="font-heading text-heading">VPN Info</p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              VPN Blog
            </p>
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
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              Support
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              Contact Us
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              Business VPN
            </p>
            <p className="font-simple text-simple text-[#8D98A9] hover:text-[#092857] cursor-pointer">
              FAQ
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(80deg, #4ECAFF 0%, #0071FF 50%, #0066E7 100%)",
        }}
        className="w-full flex flex-row items-center justify-around  relative top-16 text-white p-3"
      >
        <StarPurple500Icon />
        <p className="font-simple text-simple text-white">
          2023 copy right current VPN
        </p>
        <StarPurple500Icon />
      </div>
    </div>
  );
};

export default Footer;
