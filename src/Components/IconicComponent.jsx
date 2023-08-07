import React, { useState } from "react";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";

function Vertical({ number, title }) {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <p className=" text-5xl text-primary  font-subHeading  flex  items-center cursor-pointer mr-5">
        <span className="text-[#0A7AF9]">+</span> {number}
      </p>
      <p className="text-subHeading font-subHeading whitespace-nowrap ">
        {title}
      </p>
    </div>
  );
}

function IconicComponent() {
  const [icons, setIcons] = useState([Company1, Company2, Company3]);
  return (
    <div className="flex justify-between w-full container ">
      <div className="flex space-x-10">
        <Vertical number={"1B"} title={"Downloads"} />
        <Vertical number={"30K"} title={"User In Month"} />
        <Vertical number={"40M"} title={"Premium User"} />
      </div>
      <div className="flex space-x-10">
        {icons.map((icon, index) => {
          return <img src={icon} alt="" key={index} />;
        })}
      </div>
    </div>
  );
}

export default IconicComponent;
