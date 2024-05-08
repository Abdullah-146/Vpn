import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function InputField({ style, Icon, text = "Email", type, onChange }) {
  return (
    <div
      className={`border-2 flex items-center border-[#A1CDFF] bg-white rounded-full px-5  mb-5 w-full  `}
      style={{
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        ...style,
      }}
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
