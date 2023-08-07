import React, { useState } from "react";
import "../Css/slider.css";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";

import shield from "../assets/shield.svg";
import planet from "../assets/planet.svg";
import Rocket from "../assets/Rocket.svg";
import emojihappy from "../assets/emojihappy.svg";

function SlidingComponent({ icon }) {
  return (
    <div
      className="flex justify-center items-center bg-[#66778D12]   border-2 w-auto h-20 rounded-3xl px-10  "
      style={{ backgroundColor: "white" }}
    >
      <img src={icon} alt="" className="w-10" />
      <p className="text-[#27223E] text-xl font-semibold ml-3 whitespace-nowrap">
        {" "}
        Beutiful Ui Design
      </p>
    </div>
  );
}

function Slider() {
  const [icons, setIcons] = useState([
    shield,
    planet,
    Rocket,
    emojihappy,
    shield,
    planet,
    Rocket,
    emojihappy,
  ]);
  return (
    <div className="logos">
      <div className=" flex  logos-slide space-x-20  ">
        {icons.map((icon, index) => {
          return <SlidingComponent icon={icon} />;
        })}
      </div>
    </div>
  );
}

export default Slider;
