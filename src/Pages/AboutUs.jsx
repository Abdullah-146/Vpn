import React from "react";
import Card from "../Components/Card";
import CardBlur from "../Components/CardBlur";
import SVG from "../assets/SVG1.svg";
import SVG2 from "../assets/SVG2.svg";
import SVG3 from "../assets/SVG3.svg";
import icon from "../assets/chart-column.svg";
import lock from "../assets/lock.svg";
import stable from "../assets/message.svg";
import HomeComponent from "../Components/HomeComponent";
import AboutUsComponent from "../Components/AboutUsComponent";
import Nav from "../Components/Nav";
import FaqBox from "../Components/FaqBox";
import Footer from "../Components/Footer";
import IconicComponent from "../Components/IconicComponent";
import TextComponent from "../Components/TextComponent";
import Slider from "../Components/Slider";
import SliderReverse from "../Components/SliderReverse";
import CommentSlider from "../Components/CommentSlider";
import AboutUsSVG from "../assets/AboutUsSvg.svg";
import AboutUsMainSvg from "../assets/AboutUsMainSvg.svg";
import planet from "../assets/planet.svg";
import AboutUsIconic from "../Components/AboutUsIconic";

function AboutUs() {
  return (
    <div className="relative">
      <Nav />
      <AboutUsComponent
        SVG={AboutUsMainSvg}
        icon={planet}
        iconText="Know more about this platform"
        line1="About Us"
        // line2="Current VPN"
      />

      <AboutUsIconic />

      <CardBlur
        SVG={AboutUsSVG}
        icon={icon}
        stars={false}
        line1={"How Exactly "}
        line2="Current VPN Works"
        iconText="Data Base"
        desc="Our cutting-edge VPN operates on a sophisticated infrastructure designed to deliver unparalleled speed and stability. At its core, our service utilizes advanced encryption protocols to secure your data and online activities, safeguarding your privacy and anonymity. When you connect to our VPN servers, your internet traffic is routed through secure tunnels, effectively shielding it from prying eyes and potential threats. Moreover, our global network of servers is strategically located to minimize latency and optimize performance, ensuring lightning-fast connections wherever you are in the world."
      />

      {/* <div className="flex-1 flex w-full items-center flex-col md:flex-row space-y-4 md:space-y-0 my-4 ">
        <div className="flex-1">
          <Card
            reverse={false}
            line1="(Users) Comments!"
            line2=""
            iconText="Safe"
            icon={stable}
          />
        </div>
        <div className=" ComponentBg relative ">
          <CommentSlider
            comments={[
              {
                avatar:
                  "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
                name: "John Doe",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
              },
              {
                avatar:
                  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
                name: "John Doe2",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
              },
            ]}
          />
        </div>
      </div> */}
      <FaqBox />
      <Footer />
    </div>
  );
}

export default AboutUs;
