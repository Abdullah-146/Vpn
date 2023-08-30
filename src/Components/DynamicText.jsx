import React from "react";
import Star1 from "../assets/Star1.svg";
import Star2 from "../assets/Star2.svg";

function DynamicText({ icon, Heading, subHeading }) {
  return (
    <div className="my-5">
      <div className="flex flex-row items-center justify-around ">
        <img src={Star1} alt="" />
        <div className="flex flex-col items-center justify-center  ">
          <div className="flex flex-row items-center justify-center space-x-4 ">
            <img src={icon} alt="" />
            <p className="font-subHeading text-simple">{Heading}</p>
          </div>
          <p className="font-heading text-heading text-center mt-2">
            {subHeading}
          </p>
        </div>
        <img src={Star2} alt="" />
      </div>
    </div>
  );
}

export default DynamicText;
