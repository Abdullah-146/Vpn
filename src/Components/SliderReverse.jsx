import React, { useState } from "react";
// import "../Css/slider.css";

import shield from "../assets/shield.svg";
import planet from "../assets/planet.svg";
import Rocket from "../assets/Rocket.svg";
import emojihappy from "../assets/emojihappy.svg";
import { motion } from "framer-motion";

function SlidingComponent({ icon, text }) {
  return (
    <div
      className="flex justify-center items-center bg-[#66778D12]   border-2 w-auto h-20 rounded-3xl px-10  "
      style={{ backgroundColor: "white" }}
    >
      <img src={icon} alt="" className="w-10" />
      <p className="text-[#27223E] text-xl font-semibold ml-3 whitespace-nowrap">
        {text}
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
  const duplicatedSlides = [...sliderItems, ...sliderItems];

  return (
    <div
      className="relative h-full overflow-hidden py-12 bg-white mx-auto"
      style={{ width: "100%" }}
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex justify-center items-center    w-auto h-20 rounded-3xl px-3"
            // style={{ width: `${100 / sliderItems.length}%` }}
          >
            <SlidingComponent icon={slide.icon} text={slide.text} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default Slider;
