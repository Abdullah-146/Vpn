import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginSvg from "../assets/LoginSvg.svg";
import InputField from "../Components/InputField";
import key from "../assets/key.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DoneIcon from "@mui/icons-material/Done";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#c4e9f974] to-white pt-8 overflow-hidden"  onClick={()=> navigate(-1)} >
      {/* make button named back */}
      <div className=" flex justify-center items-center py-5 rounded-full bg-white w-[150px]  ml-10 cursor-pointer  ">
        <ArrowBackIcon /> Back
      </div>
      {/* button out */}
      {/* main div in */}
      <div className="flex justify-between ">
        <img src={LoginSvg} alt="" className="  " />
        {/* All login Fields in */}
        <div className="flex flex-col w-full  text-center items-center   ">
          <h1 className="text-4xl font-medium text-simple flex">
            <span>Login In Your&nbsp;</span>
            <span className="font-heading">Account!</span>
          </h1>
          <p className="text-xl text-[#7B899D] font-simple mt-4 mb-10">
            Please log in with scan qr code or fill out the Form...
          </p>
          {/* form */}
          <form className="flex flex-col justify-center items-center w-full">
            <div className="w-[50%]">
              <InputField
                type="text"
                placeholder="Email"
                Icon={PersonOutlineIcon}
              />
              <InputField type="password" text="Password" Icon={key} />
            </div>
            {/* terms and conditions */}
            <div className="flex justify-between w-[50%]">
              <div className="flex  items-center">
                <div className="bg-[#0A7AF9] p-[2px] rounded-full  ">
                  <DoneIcon sx={{ color: "white", fontSize: 25 }} />
                </div>
                <p className="ml-2 text-[#4A5A71] font-semibold">
                  I Agree To The Rules
                </p>
              </div>
              <p className="text-[#0A7AF9] font-bold  ">Forgot Password? </p>
            </div>
            {/* terms and conditions out */}

            <div className="w-[50%]">
              <Button />
            </div>

            <div className="flex  items-center mt-5">
              <p className="ml-2 text-[#A6A6BB] font-semibold">
                Do You Have Account? &nbsp;
              </p>
              <p className="text-[#0A7AF9] font-bold  "> Sign Up </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
