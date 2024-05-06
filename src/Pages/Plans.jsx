import React from "react";
import Card from "../Components/Card";
import stable from "../assets/stable.svg";
import Nav from "../Components/Nav";
import FaqBox from "../Components/FaqBox";
import Footer from "../Components/Footer";
import CommentSlider from "../Components/CommentSlider";
import DynamicText from "../Components/DynamicText";
import Planet from "../assets/planet.svg";
import CardSlider from "../Components/CardSlider";
import CardBlur from "../Components/CardBlur";
import AboutUsSVG from "../assets/AboutUsSvg.svg";
import icon3 from "../assets/chart-column.svg";
import PlansComponent from "../Components/PlansComponent";
import PlansTable from "../Components/PlansTable";
import OurPlans from "../Components/OurPlans";

function Plans() {
  return (
    <div className="bg-gradient-to-r from-[#d1ffff1A] to-[#fafbfc]    ">
      {/* <img
        src={PlansBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
      /> */}
      <Nav />

      <PlansComponent
        icon={Planet}
        Heading={"Join To Premium Members"}
        subHeading={"Our Plans"}
      />
      <OurPlans />

      <PlansTable />

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

export default Plans;
