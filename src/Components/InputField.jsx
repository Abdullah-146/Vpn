import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function InputField({ styles, Icon, text = "Email", type, onChange }) {
  return (
    <div
      className={`border-2 flex items-center border-[#A1CDFF] bg-white rounded-full px-5 py-6  mb-5 w-full  `}
    >
      {text == "Password" ? <img src={Icon} alt="" /> : <Icon />}
      <div className=" w-full text-start h-full ml-2">
        <p className="text-[#9999AF] text-base">{text}</p>

        <div>
          <input
            type={type}
            placeholder=""
            className="w-full outline-none bg-transparent"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;
