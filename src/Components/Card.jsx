import React from "react";
import Stars from "./Stars";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Card({
  SVG,
  icon,
  iconText = "Secure",
  line1 = "Use Social Medias",
  line2 = "Like A Cup of Tee",
  reverse = false,
  stars = true,
}) {
  return (
    <div
      className={`flex justify-between mt-10 ${
        reverse ? "lg:flex-row-reverse" : ""
      }  flex-col lg:flex-row   container    `}
    >
      <img
        src={SVG}
        alt="computer guy"
        className="mr-0 lg:mr-10 mb-4 lg:mb-0"
      />
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

        <p className=" text-primary text-2xl  font-subHeading mt-5 flex  items-center cursor-pointer">
          Know More
          <span className="ml-1">
            <ArrowForwardIcon />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
