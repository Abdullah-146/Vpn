import React from "react";

function CurvedItem({ title, para, para2, svg, color, color2 }) {
  return (
    <div className=" rounded-lg relative justify-center overflow-y-visible max-w-[400px] min-w-[400px]">
      <img
        src={svg}
        alt=""
        className="w-20 h-20 absolute top-[-20px] left-[40%]   z-50 "
      />

      <div
        className="max-w-sm mx-auto rounded-lg  mb-10 p-10 py-12 z-10"
        style={{
          backgroundImage: `linear-gradient(0deg, ${color} 0%, ${color} 100%, ${color})`,
          clipPath: "ellipse(60% 100% at 50% -40%)",
          position: "relative",
        }}
      ></div>
      <div
        className="bg-white border-2 min-h-[300px]  px-20 justify-center items-center flex overflow-visible "
        style={{
          clipPath: "ellipse(50% 100% at 50% -10%)",
          // round top left and right corners
          position: "relative",
          marginTop: "-105px",
          borderTopRightRadius: "45px",
          borderTopLeftRadius: "45px",
        }}
      >
        <div className="flex-1 flex flex-col justify-center items-center max-w-[300px] min-w-[300px]  px-6">
          <h1 className="text-2xl font-bold text-primary text-start flex justify-center items-center whitespace-nowrap">
            {title}
          </h1>
          <p className="text-subHeading font-subHeading text-center pt-4 break-words max-w-[245px] whitespace-nowrap ">
            {para}
          </p>
          <p className="text-subHeading font-subHeading text-center pt-4 break-words max-w-[245px]  ">
            {para2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurvedItem;
