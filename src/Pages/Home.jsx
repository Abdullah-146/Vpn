import React from "react";
import Card from "../Components/Card";
import SVG from "../assets/SVG1.svg";
import SVG2 from "../assets/SVG2.svg";
import SVG3 from "../assets/SVG3.svg";
import HomeSVG from "../assets/HomeSVG.svg";
import icon from "../assets/icon1.svg";
import lock from "../assets/lock.svg";
import stable from "../assets/stable.svg";
import HomeComponent from "../Components/HomeComponent";
import Nav from "../Components/Nav";

function Home() {
  return (
    <div>
      <Nav />

      <HomeComponent SVG={HomeSVG} icon={icon} />
      <Card SVG={SVG} icon={icon} />
      <Card
        SVG={SVG2}
        reverse={true}
        line1="Protect Your Private"
        line2="Data And Information"
        iconText="Safe"
        icon={lock}
      />
      <Card
        SVG={SVG3}
        reverse={false}
        line1="Enjoy the Stable"
        line2="Connection And Ping"
        iconText="Safe"
        icon={stable}
      />
    </div>
  );
}

export default Home;
