import React from "react";
import Cloud from "../assets/Cloud.svg";
import fire from "../assets/fire.svg";
import commentdots from "../assets/comment-dots.svg";
import RocketB from "../assets/RocketB.svg";
import lightning from "../assets/lightning.svg";
import devices from "../assets/devices.svg";

function ImageComponent({ icon, color1, color2, color3 }) {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div
        className={`w-[160px] h-[160px] rounded-full flex justify-center items-center`}
        style={{
          background: ` linear-gradient(80deg, ${color1} 0%,${color2} 50%, ${color2} 100%)`,
        }}
      >
        <img src={icon} alt="" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
}

function TextComponent({ title, para }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center  px-6">
      <h1 className="text-2xl font-bold text-primary text-start flex justify-center items-center whitespace-nowrap">
        {title}
      </h1>
      <p className="text-subHeading font-subHeading text-center pt-4  ">
        {para}
      </p>
    </div>
  );
}

function AboutUsIconic() {
  return (
    <div className="container z-0 relative  my-24 mt-48 min-h-[100px] hidden md:block  ">
      {/* absolute in */}
      <div className="absolute top-0 left-0 -z-10 ">
        <img src={Cloud} alt="" className="" />
      </div>
      {/* absolute out */}
      {/* 2nd absolute in */}
      <div className="absolute bottom-0  right-0 -z-10 ">
        <img src={Cloud} alt="" className="" />
      </div>
      {/* 2nd absolute out */}
      {/* first Row */}
      <div className="flex ">
        <TextComponent
          title={"Daily Work"}
          para={"Current VPN For Your Daily Usages"}
        />
        <ImageComponent
          icon={fire}
          color1={"#A07CED"}
          color2={"#5E63DA"}
          color3={"#FFFFFF"}
        />
        <TextComponent
          title={"Social Media"}
          para={"Your Best Choice For Social Media"}
        />
        <ImageComponent
          icon={commentdots}
          color1={"#7EB5F9"}
          color2={"#6475FF"}
          color3={"#FFFFFF"}
        />
        <TextComponent
          title={"Device"}
          para={"Connect Up to 4 Devices With Your Account"}
        />
      </div>
      {/* first Row out */}
      {/* Second Row */}
      <div className="flex mt-2 px-10 ">
        <ImageComponent
          icon={RocketB}
          color1={"#FDAE9D"}
          color2={"#E374CA"}
          color3={"#FFFFFF"}
        />
        <TextComponent
          title={"Fast"}
          para={"Experience Our Incredible Speed"}
        />
        <ImageComponent
          icon={lightning}
          color1={"#69E2D8"}
          color2={"#5EA6DA"}
          color3={"#FFFFFF"}
        />

        <TextComponent
          title={"Ping"}
          para={"Enjoy The Lowest Ping You Can Imagine"}
        />
        <ImageComponent
          icon={devices}
          color1={"#F6C149"}
          color2={"#EB5779"}
          color3={"#FFFFFF"}
        />
      </div>
      {/* Second Row out */}
    </div>
  );
}

export default AboutUsIconic;
