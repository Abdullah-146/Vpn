import React from "react";
import FreePlanA from "../assets/FreePlanA.svg";
import ProPlanA from "../assets/ProPlanA.svg";
import AdvancePlanA from "../assets/AdvancePlanA.svg";
import Plan from "./Plan";
import Save40 from "../assets/Save40.svg";

function OurPlans() {
  const [toggle, setToggle] = React.useState(true);

  const [contentfree, setContentfree] = React.useState({
    line1: { text: "Enjoy the Stable", bool: true },
    line2: { text: "Devices 1", bool: true },
    line3: { text: "Premium Server", bool: false },
    line4: { text: "High Speed", bool: false },
    line5: { text: "Email Support", bool: false },
    line6: { text: "Malware Protection", bool: false },
    line7: { text: "Gaming or Streaming Premium", bool: false },
  });
  const [contentPremimum, setContentPremimum] = React.useState({
    line1: { text: "Enjoy the Stable", bool: true },
    line2: { text: "Devices 1", bool: true },
    line3: { text: "Premium Server", bool: true },
    line4: { text: "High Speed", bool: true },
    line5: { text: "Email Support", bool: true },
    line6: { text: "Malware Protection", bool: true },
    line7: { text: "Gaming or Streaming Premium", bool: true },
  });
  return (
    <div className="container relative">
      <div className="flex justify-center items-center w-full  ">
        <div className="border-2 bg-gradient-to-r py-1 px-1 rounded-3xl from-[#69cce263] to-[#8ef0e83a] flex space-x-2 ml-0 md:ml-64 cursor-pointer">
          <div
            className={` py-3 rounded-3xl  px-8   `}
            style={{
              background: toggle
                ? "linear-gradient(to right,#fff, #69cce227)"
                : "white",
            }}
            onClick={() => setToggle(true)}
          >
            <p
              className={`text-center w-16 ${
                toggle ? "text-[#0A7AF9]" : "text-black"
              }`}
            >
              Monthly
            </p>
          </div>
          <div
            className={` py-3 rounded-3xl  px-8 }  `}
            style={{
              background: !toggle
                ? "linear-gradient(to right,#fff, #69cce227)"
                : "white",
            }}
            onClick={() => setToggle(false)}
          >
            <p
              className={`text-center w-16 ${
                !toggle ? "text-[#0A7AF9]" : "text-black"
              }`}
            >
              Yearly
            </p>
          </div>
        </div>
        <div className="ml-20 hidden md:block">
          <img src={Save40} alt="" className="" />
        </div>
      </div>

      {/* Render Three Tables Free Plan & Pro & Advanced */}
      <div className="flex flex-col  md:flex-row justify-center items-center my-16  ">
        {toggle ? (
          <>
            <Plan
              title="Free Plan"
              svg={FreePlanA}
              price={0}
              color1={"#A07CED"}
              color2={"#5E63DA"}
              content={contentfree}
            />
            <Plan
              title="Pro"
              svg={ProPlanA}
              price={10}
              mrp={12}
              color1={"#F6C149"}
              color2={"#EB5779"}
              content={contentPremimum}
            />
          </>
        ) : (
          <>
            <Plan
              title="Advanced"
              svg={AdvancePlanA}
              price={60}
              mrp={120}
              color1={"#FFD568"}
              color2={"#FB993F"}
              content={contentPremimum}
              yearly={!toggle}
            />
            <Plan
              title="Advanced"
              svg={AdvancePlanA}
              price={110}
              mrp={199}
              twoYears={true}
              color1={"#FFD568"}
              color2={"#FB993F"}
              content={contentPremimum}
              yearly={!toggle}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default OurPlans;
