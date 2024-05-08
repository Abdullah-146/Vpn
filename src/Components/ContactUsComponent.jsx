import React, { useState } from "react";
import Download from "../assets/Download.svg";
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";
import Stars from "./Stars";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import bulb from "../assets/Bulb.jsx";
import InputField from "./InputField";
import EmailIcon from "@mui/icons-material/Email";
import Button from "./Button.jsx";

function ContactUsComponent({
  SVG,
  icon,
  iconText = "Surf clouds",
  line1 = "Current VPN",
  line2 = " Fast And Stable",
  reverse = true,
  stars = false,
}) {
  const [icons, setIcons] = useState([Company1, Company2, Company3]);
  const [data, setData] = useState({
    email: "",
    firstName: "",
    subject: "",
    message: "",
  });
  return (
    <div
      className={`flex justify-center  ${
        reverse ? "md:flex-row-reverse " : ""
      }  flex-col md:flex-row container mt-16`}
      style={{ paddingRight: 0, marginRight: 0 }}
    >
      <img
        src={SVG}
        alt="computer guy"
        className="max-h-[500px] "
        style={{
          objectFit: "contain",
          // drop shadow
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4)",
          marginLeft: 200,
        }}
      />
      {/* entire second div */}
      <div className="flex flex-col text-start  flex-1 max-w-full md:min-w-[50%] ">
        <div className="flex justify-between    ">
          <h1 className="text-2xl font-bold text-simple text-start flex">
            <span>
              <img src={icon} alt="" className="mr-2" />
            </span>
            {iconText}
          </h1>
          {stars && <Stars reverse={reverse} />}
        </div>
        <h1 className="text-heading font-heading ">
          {line1} <br /> {line2}
        </h1>

        <div>
          <div className="flex flex-row space-x-5">
            <InputField
              type="text"
              placeholder="First Name"
              Icon={PersonOutlineIcon}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
            <InputField
              type="text"
              placeholder="Subject"
              text="Subject"
              Icon={bulb}
              onChange={(e) => setData({ ...data, subject: e.target.value })}
            />
          </div>
          <InputField
            type="text"
            placeholder="Email"
            Icon={EmailIcon}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <textarea
            className="w-full h-40 border-2 border-[#E0E0E0] rounded-lg p-2"
            placeholder="Message"
            onChange={(e) => setData({ ...data, message: e.target.value })}
          ></textarea>
          <Button
            text="Send Message"
            onClick={() => console.log("Send Message")}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
