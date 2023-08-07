import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function InputField({ styles }) {
  return (
    <div
      className={`border-2 flex items-center border-black bg-white rounded-full px-5 py-6 w-full mb-5 ${styles}   `}
    >
      <PersonOutlineIcon />
      <div>
        <input
          type="text"
          placeholder="Email"
          className="w-full outline-none bg-transparent"
        />
      </div>
    </div>
  );
}

export default InputField;
