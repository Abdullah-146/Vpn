import React, { useState } from "react";
import NordVPN from "../assets/NordVPN.png";
import Express from "../assets/Express.png";
import Current from "../assets/Current.png";

const cardData = [
  {
    id: 2,
    title: "Card 2",
    content: {
      line1: "Enjoy the Stable",
      line2: "Connection And Ping",
      line3: "Enjoy the Stable",
      line4: "Connection And Ping",
    },
    image: Express,
  },
  {
    id: 1,
    title: "Card 1",
    content: {
      line1: "Enjoy the Stable",
      line2: "Connection And Ping",
      line3: "Enjoy the Stable",
      line4: "Connection And Ping",
    },
    image: NordVPN,
  },
  {
    id: 3,
    title: "Card 3",
    content: {
      line1: "Enjoy the Stable",
      line2: "Connection And Ping",
      line3: "Enjoy the Stable",
      line4: "Connection And Ping",
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

  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-2 p-2 bg-gray-300 rounded-lg"
        onClick={handleNextClick}
      >
        &lt;
      </button>
      <div className="flex space-x-4   ">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`p-4 border rounded-lg ${
              index === 1 ? "bg-blue-200" : "bg-gray-100"
            }  transform ${
              index === 1 ? "scale-110" : "scale-90"
            } transition-transform ease-out duration-300 `}
            style={{
              minWidth: "200px",
              transition: "flex 0.5s ease-in-out",
            }}
          >
            <img src={card.image} alt={card.title} className="mb-2" />

            {Object.keys(card.content).map((key, index) => {
              return (
                <p className="text-simple font-heading my-2">
                  {card.content[key]}
                </p>
              );
            })}
          </div>
        ))}
        <div className="border-2 border-black ">Jejvf</div>
      </div>
      <button
        className="ml-2 p-2 bg-gray-300 rounded-lg"
        onClick={handlePrevClick}
      >
        &gt;
      </button>
    </div>
  );
};

export default CardCarousel;
