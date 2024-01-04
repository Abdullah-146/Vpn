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
import FaqBox from "../Components/FaqBox";
import Footer from "../Components/Footer";
import IconicComponent from "../Components/IconicComponent";
import TextComponent from "../Components/TextComponent";
import Slider from "../Components/Slider";
import SliderReverse from "../Components/SliderReverse";
import CommentSlider from "../Components/CommentSlider";
import MainSvg from "../assets/MainSvg";

function Home() {
  return (
    <div>
      <Nav />
      <div className="bgg">
        <HomeComponent SVG={HomeSVG} icon={icon} />
        {/* <MainSvg /> */}
        <IconicComponent />
      </div>

      <Card SVG={SVG} icon={icon} content='Just as a well-crafted tea invigorates your senses, this VPN company seamlessly integrates robust privacy features with swift internet connectivity. Share your moments, connect, and explore without compromise as you bask in the comfort of a VPN that not only safeguards your digital footprint but also ensures a smooth and rapid online experience.' />
      <Card
        SVG={SVG2}
        reverse={true}
        line1="Protect Your Private"
        line2="Data And Information"
        content='Shield your private data and information with our current VPN, a fortress for your online privacy. This cutting-edge VPN employs robust encryption protocols to ensure that your sensitive data remains confidential and secure from prying eyes. Whether you are conducting business transactions or sharing personal moments, rest easy knowing that your information is safeguarded. Take control of your digital privacy and enjoy peace of mind as you navigate the online world with our VPN protective shield. '
        iconText="Safe"
        icon={lock}
      />
      <Card
        SVG={SVG3}
        reverse={false}
        line1="Enjoy the Stable"
        line2="Connection And Ping"
        iconText="Safe"
        content='Experience uninterrupted online activities as this VPN optimizes your network for a consistently smooth performance. Whether youare gaming, streaming, or engaging in video calls, relish the seamless connectivity that minimizes latency. Elevate your digital experience and bid farewell to disruptions – our VPN ensures a stable connection and minimal ping for a truly enjoyable online journey. '
        icon={stable}
      />
      <TextComponent />
      <Slider />
      <SliderReverse />
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

export default Home;
