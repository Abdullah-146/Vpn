import React, { useState } from "react";
import Download from "../assets/Download.svg";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";
import Stars from "./Stars";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Vertical({ number, title }) {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <p className=" text-5xl text-primary  font-subHeading  flex  items-center cursor-pointer mr-5">
        <span className="text-[#0A7AF9]">+</span> {number}
      </p>
      <p className="text-subHeading font-subHeading whitespace-nowrap ">
        {" "}
        {title}{" "}
      </p>
    </div>
  );
}

function Horizontal() {
  return null;
}

function HomeComponent({
  SVG,
  icon,
  iconText = "Surf clouds",
  line1 = "Current VPN",
  line2 = " fast and stable",
  reverse = true,
  stars = false,
}) {
  const [icons, setIcons] = useState([Company1, Company2, Company3]);
  return (
    <div
      className={`flex justify-between ${
        reverse ? "md:flex-row-reverse " : ""
      }  flex-col md:flex-row container mt-16 `}
    >
      <img src={SVG} alt="computer guy" className="mr-0  mb-4 lg:mb-0" />
      {/* entire second div */}
      <div className="flex flex-col text-start  w-full  ">
        <div className="flex justify-between    ">
          <h1 className="text-2xl font-bold text-simple text-start flex">
            <span>
              <img src={icon} alt="" className="mr-2" />
            </span>
            {iconText}
          </h1>
          {stars && <Stars reverse={reverse} />}
        </div>
        <h1 className="text-heading font-heading ">
          {line1} <br /> {line2}
        </h1>

        <p className="text-subHeading font-subHeading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <img src={Download} alt="" className="w-96 h-52 cursor-pointer  " />
        {/* entire domain frim 1B to plaid */}
      </div>
    </div>
  );
}

export default HomeComponent;
