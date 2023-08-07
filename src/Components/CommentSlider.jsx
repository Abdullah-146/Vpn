import React from "react";
import LeftComma from "../Svgs/LeftComma";
import RightComma from "../Svgs/RightComma";
import Background from "../Svgs/Comment";

const CommentSlider = () => {
  return (
    <div className="relative flex-1 flex flex-col items-center w-4/5 bg-transparent">
      <div className="relative top-1/2 bg-white z-10 w-[15%] h-[15%] flex  p-4 rounded-full">
        <img
          className="max-w-14 rounded-full border"
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
          alt="user avatar"
        />
      </div>
      <div style={{

      }} className="bg-white rounded-lg flex-1 flex ">
        <div className="w-6 absolute bg-black border-[red] rounded-lg top-0 left-0 -rotate-12" />
        <div className="flex-1 flex flex-col space-y-2 p-6">
          <div className="w-full flex items-center justify-between">
            {/* <img src="../assets/leftComma.svg" alt="" /> */}
            <LeftComma />
            <RightComma />
            {/* <img src="../assets/rightComma.svg" alt="" /> */}
          </div>
          <div className="w-full text-center">
            <p className="text-subHeading font-subHeading">John Doe</p>
          </div>
          <div className="w-full text-center">
            <p className="text-simple font-simple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad..!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Controls = () => {
//   return (
//     <div>CommentSlider</div>
//   )
// }



export default CommentSlider;
