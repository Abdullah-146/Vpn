import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const Row = ({ plan, free, advance, pro, bg }) => {
  return (
    <div
      className={`flex flex-row justify-around my-2 ${
        bg ? "bg-[#d1ffff1A]" : "bg-[#fff]"
      }  bg-[#d1ffff1A] rounded-3xl `}
    >
      <p className="text-[#4A5A71] text-[1.5rem] font-semibold  w-[300px] ml-2">
        {plan}
      </p>

      <p className="text-simple font-heading w-[150px]">
        {" "}
        {free == 0 ? (
          <CloseIcon sx={{ color: "#EB2051", marginLeft: -1 }} />
        ) : free == 100 ? (
          <DoneIcon sx={{ color: "#10D074", marginLeft: -1 }} />
        ) : (
          free
        )}
      </p>

      <p className="text-simple font-heading w-[150px]">
        {" "}
        {pro == 0 ? (
          <CloseIcon sx={{ color: "#EB2051", marginLeft: -1 }} />
        ) : pro == 100 ? (
          <DoneIcon sx={{ color: "#10D074", marginLeft: -1 }} />
        ) : (
          pro
        )}
      </p>

      <p className="text-simple font-heading w-[150px]">
        {" "}
        {advance == 0 ? (
          <CloseIcon sx={{ color: "#EB2051", marginLeft: -1 }} />
        ) : advance == 100 ? (
          <DoneIcon sx={{ color: "#10D074", marginLeft: -1 }} />
        ) : (
          advance
        )}
      </p>
    </div>
  );
};

function PlansTable() {
  return (
    <div className="container">
      <div className="flex flex-row justify-around  items-center mb-5">
        <p className="text-heading font-heading w-[300px]">Plans</p>
        <p className="text-simple font-heading w-[140px]">Free</p>
        <p className="text-base text-[#FB993F] font-heading w-[130px] mr-2">
          Pro
        </p>
        <p className="text-simple font-heading w-[170px]">Advance</p>
      </div>
      <Row plan="Member Account" free={1} advance={3} pro={2} bg={true} />
      <Row plan="Device Connections" free={1} advance={12} pro={6} bg={false} />
      <Row plan="Platforms" free={1} advance={"All"} pro={3} bg={true} />
      <Row
        plan="Military Grade Encryption"
        free={0}
        advance={100}
        pro={100}
        bg={false}
      />
      <Row plan="Monthly" free={1} advance={0} pro={0} bg={true} />
      <Row plan="Yearly" free={0} advance={100} pro={100} bg={false} />
    </div>
  );
}

export default PlansTable;
