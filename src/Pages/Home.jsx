import React from "react";
import Card from "../Components/Card";
import SVG from "../assets/SVG1.svg";
import icon from "../assets/icon1.svg";

function Home() {
  return (
    <div className="container">
      <Card SVG={SVG} icon={icon} />
      {/* <img src={SVG} alt="" /> */}
    </div>
  );
}

export default Home;
