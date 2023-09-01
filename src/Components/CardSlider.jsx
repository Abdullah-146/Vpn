import React, { useState } from "react";
import NordVPN from "../assets/NordVPN.png";
import Express from "../assets/Express.png";
import Current from "../assets/Current.png";
import { NavLink } from "react-router-dom";
import verified from "../assets/verified.svg";
import Cross from "../assets/Cross.svg";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const cardData = [
  {
    id: 2,
    title: "Card 2",
    content: {
      line1: { text: "Enjoy the Stable", bool: false },
      line2: { text: "Connection And Ping", bool: true },
      line3: { text: "Enjoy the Stable", bool: false },
      line4: { text: "Connection And Ping", bool: true },
    },
    image: Express,
  },
  {
    id: 1,
    title: "CurrentVPN",
    content: {
      line1: { text: "Enjoy the Stable", bool: true },
      line2: { text: "Connection And Ping", bool: true },
      line3: { text: "Enjoy the Stable", bool: true },
      line4: { text: "Connection And Ping", bool: true },
    },
    image: NordVPN,
  },
  {
    id: 3,
    title: "Card 3",
    content: {
      line1: { text: "Enjoy the Stable", bool: true },
      line2: { text: "Connection And Ping", bool: true },
      line3: { text: "Enjoy the Stable", bool: false },
      line4: { text: "Connection And Ping", bool: false },
    },
    image: Express,
  },
];

const CardCarousel = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(1);
  let newIndex = 1;

  const handlePrevClick = () => {
    newIndex =
      currentCardIndex === 0 ? cardData.length - 1 : currentCardIndex - 1;
    swapContent(newIndex);
  };

  const handleNextClick = () => {
    newIndex =
      currentCardIndex === cardData.length - 1 ? 0 : currentCardIndex + 1;
    swapContent(newIndex);
  };

  const swapContent = (newIndex) => {
    const updatedCardData = [...cardData];
    [updatedCardData[currentCardIndex].title, updatedCardData[newIndex].title] =
      [
        updatedCardData[newIndex].title,
        updatedCardData[currentCardIndex].title,
      ];
    [
      updatedCardData[currentCardIndex].content,
      updatedCardData[newIndex].content,
    ] = [
      updatedCardData[newIndex].content,
      updatedCardData[currentCardIndex].content,
    ];
    [updatedCardData[currentCardIndex].image, updatedCardData[newIndex].image] =
      [
        updatedCardData[newIndex].image,
        updatedCardData[currentCardIndex].image,
      ];
    setCurrentCardIndex(newIndex);
  };
  const [links, setLinks] = useState(["Home", "AboutUs", "Services", "Plans"]);

  return (
    <div className="md:flex items-center  container hidden justify-center   ">
      <button onClick={handleNextClick}>
        <ArrowLeft
          sx={{
            color: "black",
            backgroundColor: "white",
            padding: "0rem",
            borderRadius: "30%",
            fontSize: "3rem",
            ":hover": {
              color: "white",
              backgroundColor: "#0A7AF9",
              borderRadius: "50%",
              transition: "all 0.5s ease-in-out",
            },
          }}
        />
      </button>
      <div className="flex  items-center justify-around w-[90%] lg:w-[75%]   ">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`p-4 border  ${
              index === 1 ? "bg-[#e4f6f674]" : "white"
            }  transform ${
              index === 1 ? "scale-110" : "scale-90"
            } transition-transform ease-out duration-300  px-10 py-8 rounded-3xl  `}
            style={{
              minWidth: "200px",
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <img src={card.image} alt={card.title} className="mb-8" />

            {Object.keys(card.content).map((key, index) => {
              return (
                <div className="flex items-center">
                  {card.content[key].bool ? (
                    <img src={verified} alt="" className="mr-2" />
                  ) : (
                    <img src={Cross} alt="" className="mr-2" />
                  )}

                  <p className="text-simple font-simple my-1">
                    {card.content[key].text}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button onClick={handlePrevClick}>
        <ArrowRight
          sx={{
            color: "black",
            backgroundColor: "white",
            padding: "0rem",
            fontSize: "3rem",
            ":hover": {
              color: "white",
              backgroundColor: "#0A7AF9",
              borderRadius: "50%",
              transition: "all 0.5s ease-in-out",
            },
          }}
        />
      </button>
    </div>
  );
};

export default CardCarousel;
