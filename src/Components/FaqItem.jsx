import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FaqItem = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = ()=> {
    setSelected(!selected);
  }

  return (
    <div 
    
    onClick={handleClick} className="w-full flex flex-row ">
      <div
        className={`w-2 h-8 self-center rounded-l-md ${
          selected ? "bg-bluish" : "bg-transparent"
        }`}
      />
      <div className="flex-1 flex flex-col space-y-4 p-5 drop-shadow-md bg-white rounded-md">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center space-x-5">
            <p className="font-subHeading text-[#0A7AF9]">1</p>
            <p className="font-subHeading text-simple ">
              how can i use the vpn?
            </p>
          </div>
            {selected ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        <div className={`${selected ? "flex" : "hidden"} flex transition-all ease-in-out`}>
          <p className="text-simple font-simple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
