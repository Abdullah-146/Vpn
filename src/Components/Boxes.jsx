import React from "react";
import Graph from "../assets/Graph.svg";
import MiddleStar from "../assets/MiddleStar.svg";
import Chart from "../assets/Chart.svg";
import Activity from "../assets/Activity.svg";
import Lockk from "../assets/Lockk.svg";
import Chat from "../assets/Chat.svg";

function Boxes() {
  const boxes = [
    {
      icon: Graph,
      heading: "Connection Detail",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: Chat,
      heading: "Connection Detail",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: Lockk,
      heading: "Connection Detail",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: Activity,
      heading: "Connection Detail",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: Chart,
      heading: "Connection Detail",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      icon: MiddleStar,
      heading: "Connection Detail",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  return (
    <div className="md:grid grid-cols-3 gap-3 container flex flex-wrap justify-center">
      {boxes.map((box) => {
        return (
          <div className="flex justify-center items-center flex-col shadow-md bg-white py-10 px-8 rounded-[40px] mx-5 my-3">
            <img src={box.icon} alt="" className="w-20 h-20" />
            <h1 className="text-2xl text-primary font-heading">
              {box.heading}
            </h1>
            <p className="text-subHeading font-subHeading max-w-[200px] text-center mt-5">
              {box.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Boxes;
