import React, { useState } from "react";
import verified from "../assets/verified.svg";
import Cross from "../assets/Cross.svg";
import DoneIcon from "@mui/icons-material/Done";
import { ArrowForward, ArrowRight, ArrowRightAlt } from "@mui/icons-material";

function ImageComponent({ icon, color1, color2, color3 }) {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div
        className={`w-[50px] h-[50px] rounded-full flex justify-center items-center`}
        style={{
          background: ` linear-gradient(80deg, ${color1} 0%,${color2} 50%, ${color2} 100%)`,
        }}
      >
        <img src={icon} alt="" className="w-[10x] h-[10x]    " />
      </div>
    </div>
  );
}

function Plan({ svg, title, price, color1, color2, content, yearly }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white p-7  min-w-[30%]  rounded-2xl  flex flex-col justify-between  shadow-lg  my-4   transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: isHovered ? "500px" : "auto" }} // Adjust height onMouseIn
    >
      <div className="flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center   ">
          <ImageComponent
            icon={svg}
            color1={color1}
            color2={color2}
            color3={"#FFFFFF"}
          />
          <p className="font-heading text-simple  ml-3 ">{title}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold  text-2xl text-[#FB993F]">$ {price}</p>
          <p className="text-subHeading  font-subHeading  ">
            {yearly ? "Per Year" : "Per Month"}
          </p>
        </div>
      </div>

      {Object.keys(content).map((key, index) => {
        return (
          <div className="flex items-center my-2  " key={index}>
            {content[key].bool ? (
              <img src={verified} alt="" className="mr-2" />
            ) : (
              <img src={Cross} alt="" className="mr-2" />
            )}

            <p className="text-simple font-simple my-1">{content[key].text}</p>
          </div>
        );
      })}
      <div className="flex justify-center items-center mt-10">
        <button
          className={`bg-gradient-to-r from-${color1} to-${color2}  py-4 px-16 rounded-3xl text-bluish font-bold`}
        >
          Buy Plan
          <ArrowForward sx={{ fontSize: 20, marginLeft: 1 }} />
        </button>
      </div>
    </div>
  );
}

export default Plan;
