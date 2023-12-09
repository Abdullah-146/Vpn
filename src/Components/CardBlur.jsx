import React from "react";
import Stars from "./Stars";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function CardBlur({
  SVG,
  icon,
  iconText = "Secure",
  line1 = "Use Social Medias",
  line2 = "Like A Cup of Tee",
  reverse = false,
  stars = true,
}) {
  return (
    <div
      className={`flex justify-center md:my-16 my-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }  flex-col items-center md:flex-row container   `}
    >
      {SVG && (
        <div
          className={`relative mr-0 ${
            reverse ? "md:ml-20" : "md:mr-20"
          }    mb-4 md:mb-0 flex-1 `}
        >
          <div
            className="absolute w-full h-full backdrop-opacity-10 backdrop-invert "
            style={{
              backdropFilter: "blur(2px)",
            }}
          ></div>
          <img
            src={SVG}
            alt="computer guy"
            className={`mr-0 ${
              reverse ? "md:ml-20" : "md:mr-20"
            }    mb-4 md:mb-0 max-w-full md:max-w-[70%]  `}
          />
        </div>
      )}
      <div
        className={`flex flex-col text-start   flex-1 max-w-full  ${
          SVG ? "md:max-w-[50%]" : "md:max-w-[100%]"
        }  `}
      >
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

        <p className="text-subHeading font-subHeading">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <p className=" text-primary text-2xl  font-subHeading mt-5 flex  items-center cursor-pointer">
          Know More
          <span className="ml-1">
            <ArrowForwardIcon />
          </span>
        </p>
      </div>
    </div>
  );
}

export default CardBlur;
