import React, { useState, useRef, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FaqItem = ({ question, answer }) => {
  const [selected, setSelected] = useState(false);
  const [height, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      }, 100);
    } else {
      setTimeout(() => {
        setMaxHeight("0px");
      }, 100);
    }
  }, [selected]);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div onClick={handleClick} className="w-full flex flex-row cursor-pointer">
      <div
        className={`w-2 h-8 self-center rounded-l-md ${
          selected ? "bg-bluish" : "bg-transparent"
        }`}
      />
      <div className="flex-1 flex flex-col space-y-4 p-5 drop-shadow-md bg-white rounded-md">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center space-x-5">
            <p className="font-subHeading text-[#0A7AF9]">1</p>
            <p className="font-subHeading text-simple">{question}</p>
          </div>
          {selected ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div
          ref={contentRef}
          style={{
            height,
            maxHeight: `${height}`,
            display: `${selected ? "block" : "none"}`,
          }}
          className="flex justify-center items-center overflow-hidden transition-max-height duration-700 ease-in-out"
        >
          <p className="text-simple font-simple">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
