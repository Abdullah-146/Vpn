import React from "react";
import Star1 from "../assets/Star1.svg";
import Star2 from "../assets/Star2.svg";
import yellowThunder from "../assets/yellowThunder.svg";
import BlueFire from "../assets/BlueFire.svg";
import Cloud from "../assets/Cloud.svg";


function DynamicText({ icon, Heading, subHeading }) {
  return (
    <div className="my-5  relative">
          {/* absolute in */}
      <div className="absolute top-0 left-0 -z-10 hidden md:flex">
        <img src={Cloud} alt="" className="" />
      </div>
      {/* absolute out */}
      {/* 2nd absolute in */}
      <div className="absolute top-0 right-0 z-[1] hidden md:flex ">
        <img src={Cloud} alt="" className="" />
      </div>
      {/* 2nd absolute out */}
      <div className="flex flex-row items-center justify-around space-y-5 ">
        <img src={yellowThunder} alt="" className="hidden md:flex " />
        <div className="flex flex-col items-center justify-center  ">
          <div className="flex flex-row items-center justify-center space-x-4 ">
            <img src={icon} alt="" />
            <p className="font-subHeading text-simple">{Heading}</p>
          </div>
          <p className="font-heading text-heading text-center mt-2">
            {subHeading}
          </p>
        </div>
        <img src={BlueFire} alt="" className="hidden md:flex z-[2]" />
      </div>
      <p className="text-subHeading font-subHeading text-center container md:w-[75%] w-[100%] md:mt-[-40px] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        voluptatibus quaerat minus expedita aspernatur libero nulla. Facere quia
        commodi asperiores, cupiditate ratione, saepe obcaecati itaque culpa
        amet voluptate laboriosam aperiam?
      </p>
    </div>
  );
}

export default DynamicText;
