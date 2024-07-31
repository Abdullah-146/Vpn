import React, { useEffect } from "react";
import Card from "../Components/Card";
import SVG from "../assets/SVG1.svg";
import icon from "../assets/icon1.svg";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ContactUsCard from "../assets/ContactUsCard.svg";
import Chart from "../assets/chart-column.svg";
import ContactUsSvg from "../assets/ContactUsSvg.svg";
import MessengerSvg from "../assets/messanger.svg";
import ContactUsComponent from "../Components/ContactUsComponent";

import Share from "../assets/Share";
import ContactUsIconic from "../Components/ContactUsIconic";
import { useLocation } from "react-router-dom";

function ContactUs() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-gradient-to-r from-[#c4e9f974] to-white">
      <Nav />
      <ContactUsComponent
        SVG={ContactUsSvg}
        icon={MessengerSvg}
        iconText="Send Your Message To Our Team"
        line1="Send A Message!"
        line2=" "
      />

      <div className="flex flex-row items-center justify-center space-x-4 mt-10">
        <Share />
        <p className="font-subHeading text-simple">Connect With Us</p>
      </div>
      <p className="font-heading text-heading text-center">Contact Us..!</p>
      <ContactUsIconic />

      {/* <Card
        SVG={ContactUsCard}
        reverse={false}
        line1="Enjoy the Stable"
        line2="Connection And Ping"
        iconText="Safe"
        // content="Experience uninterrupted online activities as this VPN optimizes your network for a consistently smooth performance. Whether youare gaming, streaming, or engaging in video calls, relish the seamless connectivity that minimizes latency. Elevate your digital experience and bid farewell to disruptions – our VPN ensures a stable connection and minimal ping for a truly enjoyable online journey. "
        content=""
        icon={Chart}
      /> */}

      <Footer />
    </div>
  );
}

export default ContactUs;
