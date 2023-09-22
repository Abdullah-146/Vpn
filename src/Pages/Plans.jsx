import React from "react";
import Card from "../Components/Card";
import SVG from "../assets/SVG1.svg";
import SVG2 from "../assets/SVG2.svg";
import SVG3 from "../assets/SVG3.svg";
import HomeSVG from "../assets/FeaturesMain.svg";
import icon from "../assets/icon1.svg";
import lock from "../assets/lock.svg";
import stable from "../assets/stable.svg";
import HomeComponent from "../Components/HomeComponent";
import Nav from "../Components/Nav";
import FaqBox from "../Components/FaqBox";
import Footer from "../Components/Footer";
import IconicComponent from "../Components/IconicComponent";
import TextComponent from "../Components/TextComponent";
import Slider from "../Components/Slider";
import SliderReverse from "../Components/SliderReverse";
import CommentSlider from "../Components/CommentSlider";
import MainSvg from "../assets/MainSvg";
import DynamicText from "../Components/DynamicText";
import Rocket from "../assets/rocket.svg";
import ServicesComponent from "../Components/ServicesComponent";
import SuperImage from "../assets/SuperImage.svg";
import Boxes from "../Components/Boxes";
import Planet from "../assets/planet.svg";
import CardSlider from "../Components/CardSlider";
import CardBlur from "../Components/CardBlur";
import AboutUsSVG from "../assets/AboutUsSVG.svg";
import icon3 from "../assets/chart-column.svg";
import PlansBg from "../assets/PlansBg.svg";
import PlansComponent from "../Components/PlansComponent";
import PlansTable from "../Components/PlansTable";
import OurPlans from "../Components/OurPlans";

function Services() {
  return (
    <div className="bg-gradient-to-r from-[#d1ffff1A] to-white    ">
      <img
        src={PlansBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
      />
      <Nav />

      <PlansComponent
        icon={Planet}
        Heading={"Join To Premium Members"}
        subHeading={"Our Plans"}
      />

      <PlansTable />
      <OurPlans />

      <DynamicText
        icon={Planet}
        Heading={"See How We Compare To Other Vpn Providers"}
        subHeading={"Why Choose Current VPN?"}
      />
      <CardSlider />

      <CardBlur
        SVG={AboutUsSVG}
        icon={icon3}
        stars={false}
        line1={"How Exactly "}
        line2="Current VPN Works"
        iconText="Data Base"
      />

      <div className="flex-1 flex w-full items-center flex-col md:flex-row space-y-4 md:space-y-0 my-4">
        <div className="flex-1">
          <Card
            reverse={false}
            line1="Enjoy the Stable"
            line2="Connection And Ping"
            iconText="Safe"
            icon={stable}
          />
        </div>
        <div className="flex-1">
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
      </div>
      <FaqBox />
      <Footer />
    </div>
  );
}

export default Services;
