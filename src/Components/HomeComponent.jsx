import React, { useState } from "react";
import Download from "../assets/Download.svg";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";
import Stars from "./Stars";

function HomeComponent({
  SVG,
  icon,
  iconText = "Surf clouds",
  line1 = "Current VPN",
  line2 = " Fast And Stable",
  reverse = true,
  stars = false,
}) {
  const [icons, setIcons] = useState([Company1, Company2, Company3]);
  return (
    <div
      className={`flex justify-center  ${
        reverse ? "md:flex-row-reverse " : ""
      }  flex-col md:flex-row container mt-16`}
    >
      <img
        src={SVG}
        alt="computer guy"
        className="mr-0  mb-4 md:mb-0 flex-1 max-w-full md:max-w-[50%] max-h-[500px] "
      />
      {/* entire second div */}
      <div className="flex flex-col text-start  flex-1 max-w-full md:max-w-[50%] ">
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
          A cutting-edge service designed for lightning-fast and stable internet
          connections. With an unwavering commitment to speed, this VPN company
          ensures seamless browsing and streaming experiences for users.
        </p>

        <img src={Download} alt="" className="w-96 h-52 cursor-pointer  " />
        {/* entire domain frim 1B to plaid */}
      </div>
    </div>
  );
}

export default HomeComponent;
