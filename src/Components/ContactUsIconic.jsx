import React from "react";
import Cloud from "../assets/Cloud.svg";
import CurvedItem from "./CurvedItem";
import PhoneNumbers from "../assets/PhoneNumbers.svg";
import Location from "../assets/Location.svg";
import Contact from "../assets/Contact.svg";
function ContactUsIconic() {
  const items = [
    {
      title: "Phone Numbers",
      para: "+1 843 848 98",
      para2: "+6 848 3422",
      svg: PhoneNumbers,
      color: "#E7F6FC",
    },
    {
      title: "Location",
      para: "USA, Stockholm 401 Warren",
      para2: "Street, New York",
      svg: Location,
      color: "#F3FAFE",
    },
    {
      title: "Contact",
      para: "Support@currentvpn.io",
      para2: "Chat: +1 843 848 98",
      svg: Contact,
      color: "#FBFEFF",
    },
  ];
  return (
    <div className="container z-0 relative  my-24 mt-9 min-h-[100px] hidden lg:block  ">
      {/* absolute in */}
      <div className="absolute top-0 left-0 -z-10 ">
        <img src={Cloud} alt="" className="" />
      </div>
      {/* absolute out */}
      {/* 2nd absolute in */}
      <div className="absolute bottom-0  right-0 -z-10 ">
        <img src={Cloud} alt="" className="" />
      </div>
      {/* 2nd absolute out */}
      {/* Main Component Row in */}
      <div className="flex justify-between ">
        {items.map((item, index) => (
          <CurvedItem
            key={index}
            title={item.title}
            para={item.para}
            svg={item.svg}
            color={item.color}
            para2={item.para2}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactUsIconic;
