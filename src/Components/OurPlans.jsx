import React from "react";
import FreePlanA from "../assets/FreePlanA.svg";
import ProPlanA from "../assets/ProPlanA.svg";
import AdvancePlanA from "../assets/AdvancePlanA.svg";
import Plan from "./Plan";

function OurPlans() {
  const [toggle, setToggle] = React.useState(true);
  console.log("====================================");
  console.log(toggle);
  console.log("====================================");
  const [content, setContent] = React.useState({
    line1: { text: "Enjoy the Stable", bool: true },
    line2: { text: "Connection And Ping", bool: true },
    line3: { text: "Enjoy the Stable", bool: false },
    line4: { text: "Connection And Ping", bool: false },
  });
  return (
    <div className="container">
      <div className="flex justify-center items-center w-full ">
        <div className="border-2 bg-gradient-to-r py-1 px-1 rounded-3xl from-[#69cce263] to-[#8ef0e83a] flex space-x-2">
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
      </div>

      {/* Render Three Tables Free Plan & Pro & Advanced */}
      <div className="flex flex-col  md:flex-row justify-center items-center my-16  ">
        <Plan
          title="Free Plan"
          svg={FreePlanA}
          price={0}
          color1={"#A07CED"}
          color2={"#5E63DA"}
          content={content}
        />
        <Plan
          title="Pro"
          svg={ProPlanA}
          price={49.9}
          color1={"#F6C149"}
          color2={"#EB5779"}
          content={content}
        />
        <Plan
          title="Advanced"
          svg={AdvancePlanA}
          price={99.9}
          color1={"#FFD568"}
          color2={"#FB993F"}
          content={content}
        />
      </div>
    </div>
  );
}

export default OurPlans;
