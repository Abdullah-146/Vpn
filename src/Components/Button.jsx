import React from "react";

function Button({ text = "Login" }) {
  return (
    <button
      style={{
        background:
          "linear-gradient(80deg, #4ECAFF 0%, #0071FF 50%, #0066E7 100%)",
      }}
      className=" text-white rounded-full px-10 py-8 mt-10 w-full "
    >
      <p className="text-white text-xl font-bold ">{text}</p>
    </button>
  );
}

export default Button;
