import React, { useState, useEffect } from "react";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";

function formatNumber(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + "B";
  }
  if (number >= 1e6) {
    return (number / 1e6).toFixed(0) + "M";
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(0) + "K";
  }
  return number;
}

function Vertical({ number, title }) {
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    const targetNumber = parseInt(number);
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 20); // adjust speed of counting
    const timer = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        clearInterval(timer);
        currentNumber = targetNumber;
      }
      setDisplayedNumber(currentNumber);
    }, 50); // adjust speed of counting
    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-2xl lg:text-5xl text-primary font-subHeading flex items-center cursor-pointer mr-5">
        <span className="text-[#0A7AF9]">+</span>{" "}
        {formatNumber(displayedNumber)}
      </p>
      <p className="text-subHeading font-subHeading lg:whitespace-nowrap min-h-[100px]">
        {title}
      </p>
    </div>
  );
}

function IconicComponent({ Icons = true, contain = true }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) => {
        const updatedIcons = [...prevIcons];
        updatedIcons.push(updatedIcons.shift());
        return updatedIcons;
      });
    }, 500); // adjust the interval for sliding
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex justify-between flex-wrap w-full ${
        contain ? "container" : ""
      }`}
    >
      <div className="flex space-x-2 lg:space-x-10">
        <Vertical number={"0"} title={"Downloads"} />
        <Vertical number={"0"} title={"User In Month"} />
        <Vertical number={"0"} title={"Premium User"} />
      </div>
      {Icons && (
        <div className="icon-slider-container">
          <div className="icon-slider space-x-5">
            {icons.map((icon, index) => {
              return <img src={icon} alt="" key={index} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default IconicComponent;
