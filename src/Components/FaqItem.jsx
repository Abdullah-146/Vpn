import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FaqItem = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = ()=> {
    setSelected(!selected);
  }

  return (
    <div onClick={handleClick} className="w-full flex flex-row">
      <div
        className={`w-2 self-center rounded-r-lg ${
          selected ? "bg-bluish" : "bg-transparent"
        }`}
      />
      <div className="flex-1 flex flex-col space-y-4 p-3">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center">
            <p className="text-subHeading font-subHeading text-bluish">1</p>
            <p className="font-subHeading text-subHeading">
              how can i use the vpn?
            </p>
            {selected ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </div>
        </div>
        <div className={`${selected ? "flex" : "hidden"}`}>
          <p className="text-simple font-simple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
