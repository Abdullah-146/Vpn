import React, { useCallback } from "react";
import LeftComma from "../Svgs/LeftComma";
import RightComma from "../Svgs/RightComma";
import Comment from "../assets/Comment.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CommentSlider = ({ comments }) => {
  const commentRef = React.useRef(null);
  const avatarRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onClickRight = () => {
    //current display width
    const scrollWidth = commentRef.current.scrollWidth / comments.length;

    //smooth scroll
    commentRef.current.scrollBy({
      left: scrollWidth,
      behavior: "smooth",
    });
    avatarRef.current.scrollBy({
      left: scrollWidth,
      behavior: "smooth",
    });
    if (currentIndex < comments.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onClickLeft = () => {
    //smooth scroll
    const scrollWidth = commentRef.current.scrollWidth / comments.length;
    commentRef.current.scrollBy({
      left: -scrollWidth,
      behavior: "smooth",
    });
    avatarRef.current.scrollBy({
      left: -scrollWidth,
      behavior: "smooth",
    });
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative flex-1  flex flex-col items-center container space-y-4">
      <div
        ref={avatarRef}
        className="flex flex-row overflow-hidden w-20 h-20 rounded-full"
      >
        {comments.map((item, index) => (
          <div
            key={index.toString()}
            className="min-w-full rounded-full  bg-white "
          >
            <img src={item.avatar} alt="" />
          </div>
        ))}
      </div>
      <div className="rounded-md w-full flex-1 flex flex-col items-center bg-white">
        <div className="w-full flex items-center justify-between  px-10 py-3">
          <LeftComma />
          <RightComma />
        </div>
        <div ref={commentRef} className="flex-1 flex flex-row overflow-hidden">
          {comments.map((item, index) => (
            <div
              key={index.toString()}
              className="flex flex-col items-center justify-center min-w-full"
            >
              <p className="text-subHeading font-subHeading">{item.name}</p>
              <p className="text-simple font-simple text-center">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row space-x-1">
        {comments.map((item, index) => (
          <div
            style={{
              backgroundColor: currentIndex === index ? "skyblue" : "#eee",
            }}
            key={index.toString()}
            className="w-2 h-1 rounded-md"
          />
        ))}
      </div>
      <KeyboardArrowLeftIcon
        onClick={onClickLeft}
        sx={{ backgroundColor: "blue", color: "white", fontSize: 30 }}
        className="absolute  top-1/2 left-10 w-10 h-10 bg-white rounded-full"
      />
      <KeyboardArrowRightIcon
        onClick={onClickRight}
        sx={{ backgroundColor: "blue", color: "white", fontSize: 30 }}
        className="absolute top-1/2 right-10 w-10 h-10 bg-white rounded-full"
      />
    </div>
  );
};

export default CommentSlider;
