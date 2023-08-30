import React, { useState } from "react";
import Download from "../assets/Download.svg";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";
import Stars from "./Stars";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import IconicComponent from "./IconicComponent";

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

function AboutUsComponent({
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
      className={`flex justify-center  ${
        reverse ? "md:flex-row-reverse " : "md:flex-row"
      }  flex-col  container mt-16  `}
    >
      <img
        src={SVG}
        alt="computer guy"
        className="mr-0  mb-4 md:mb-0 flex-1 max-w-full   absolute right-0 top-0 -z-10  "
      />
      <div className="min-w-[50%] min-h-[700px]"></div>
      {/* entire second div */}
      <div className="flex flex-col text-start  flex-1 max-w-full md:max-w-[50%] ">
        <div className="flex justify-between items-center   ">
          <h1 className="text-2xl font-bold text-simple text-start flex justify-center items-center">
            <span>
              <img src={icon} alt="" className="mr-2 " />
            </span>
            {iconText}
          </h1>
          {stars && <Stars reverse={reverse} />}
        </div>
        <h1 className="text-heading font-heading ">
          {line1} <br /> {line2}
        </h1>

        <p className="text-subHeading font-subHeading">
          Current VPN is an Ad-Free VPN with Incredible Speed! Download and see
          the see yourself.
        </p>
        <div className="  flex justify-start mt-[30%] ">
          <IconicComponent Icons={false} contain={false} />
        </div>

        {/* entire domain frim 1B to plaid */}
      </div>
    </div>
  );
}

export default AboutUsComponent;
