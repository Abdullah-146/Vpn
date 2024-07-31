import React, { useState } from "react";
// import "../Css/slider.css";

import shield from "../assets/shield.svg";
import planet from "../assets/planet.svg";
import Rocket from "../assets/Rocket.svg";
import emojihappy from "../assets/emojihappy.svg";
import {
  FaLock,
  FaShieldAlt,
  FaServer,
  FaKey,
  FaEyeSlash,
  FaShieldVirus,
} from "react-icons/fa";
import { motion } from "framer-motion";

function SlidingComponent({ icon, text }) {
  return (
    <div
      className="flex justify-center items-center bg-[#66778D12] border-2 w-auto h-20 rounded-3xl px-10"
      style={{ backgroundColor: "white" }}
    >
      {typeof icon === "string" ? (
        <img src={icon} alt="" className="w-10" />
      ) : (
        <div className="w-10 text-[#27223E]">{icon}</div>
      )}
      <p className="text-[#27223E] text-xl font-semibold ml-3 whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

function Slider() {
  const [sliderItems] = useState([
    { icon: shield, text: "Peace & Secure" },
    { icon: planet, text: "Beautiful UI Design" },
    { icon: Rocket, text: "Fast & Secure" },
    { icon: emojihappy, text: "Efficient" },
    { icon: shield, text: "Reliable" },
    { icon: planet, text: "Responsive" },
    { icon: Rocket, text: "State of the Art" },
    { icon: emojihappy, text: "Nice Quality In Use" },
    {
      icon: <FaLock className="text-[blue]" size={24} />,
      text: "Top-notch Encryption",
    },
    {
      icon: <FaShieldAlt className="text-[blue]" size={24} />,
      text: "Advanced Security",
    },
    {
      icon: <FaServer className="text-[#ff7009]" size={24} />,
      text: "Secure Servers",
    },
    {
      icon: <FaKey className="text-[blue]" size={24} />,
      text: "Private Access",
    },
    {
      icon: <FaEyeSlash className="text-[blue]" size={24} />,
      text: "Anonymous Browsing",
    },
    {
      icon: <FaShieldVirus className="text-[#ff0000]" size={24} />,
      text: "Virus Protection",
    },
  ]);

  const duplicatedSlides = [
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
    ...sliderItems,
  ];

  return (
    <div
      className="relative h-full overflow-hidden py-12 bg-white mx-auto"
      style={{ width: "100%" }}
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>
      <motion.div
        className="flex"
        animate={{
          x: ["-1000%", "0%"],
          transition: {
            ease: "linear",
            duration: 350,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-auto h-20 rounded-3xl px-3"
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
