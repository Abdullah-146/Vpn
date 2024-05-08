import React from "react";
import Card from "../Components/Card";
import SVG from "../assets/SVG1.svg";
import icon from "../assets/icon1.svg";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

import chevronDown from "../assets/chevronDown.svg";
import ContactUsComponent from "../Components/ContactUsComponent";
import FaqIcon from "../Svgs/FaqIcon";
import ContactUsSvg from "../assets/ContactUsSvg.svg";
import MessengerSvg from "../assets/messanger.svg";

function ContactUs() {
  return (
    <div>
      <Nav />

      <ContactUsComponent
        SVG={ContactUsSvg}
        icon={MessengerSvg}
        iconText="Send Your Message To Our Team"
        line1="Send A Message!"
        line2=" "
      />
      <div className="flex flex-row items-center justify-center space-x-4">
        <FaqIcon />
        <p className="font-subHeading text-simple">Your Questions</p>
      </div>
      <p className="font-heading text-heading text-center">FAQ</p>

      <Card
        SVG={SVG}
        icon={icon}
        content="Just as a well-crafted tea invigorates your senses, this VPN company seamlessly integrates robust privacy features with swift internet connectivity. Share your moments, connect, and explore without compromise as you bask in the comfort of a VPN that not only safeguards your digital footprint but also ensures a smooth and rapid online experience."
      />

      <Footer />
    </div>
  );
}

export default ContactUs;
