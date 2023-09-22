import React from "react";

function OurPlans() {
  const [toggle, setToggle] = React.useState(true);
  console.log("====================================");
  console.log(toggle);
  console.log("====================================");
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
    </div>
  );
}

export default OurPlans;
