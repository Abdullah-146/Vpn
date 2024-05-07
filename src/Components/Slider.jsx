import React, { useState } from "react";
import "../Css/slider.css";

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
        Beutiful Ui Design
      </p>
    </div>
  );
}

function Slider() {
  const [sliderItems, setIcons] = useState([
    { icon: shield, text: "Peace & Secure" },
    { icon: planet, text: "Beutiful Ui Design" },
    { icon: Rocket, text: "Fast & Secure" },
    { icon: emojihappy, text: "Beutiful Ui Design" },

    { icon: shield, text: "Peace & Secure" },
    { icon: planet, text: "Beutiful Ui Design" },
    { icon: Rocket, text: "Fast & Secure" },
    { icon: emojihappy, text: "Nice Quality In Use" },
  ]);
  return (
    <div className="logos mb-5">
      <div className=" flex  logos-slide space-x-20  ">
        {sliderItems.map(({ icon, text }, index) => {
          return <SlidingComponent icon={icon} text={text} />;
        })}
      </div>
    </div>
  );
}
export default Slider;
