import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginSvg from "../assets/LoginSvg.svg";
import InputField from "../Components/InputField";

function Login() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#c4e9f974] to-white pt-8 ">
      {/* make button named back */}
      <div className=" flex justify-center items-center py-5 rounded-full bg-white w-[150px]  ml-10 cursor-pointer  ">
        <ArrowBackIcon /> Back
      </div>
      {/* button out */}
      {/* main div in */}
      <div className="flex justify-between ">
        <img src={LoginSvg} alt="" className="" />
        {/* All login Fields in */}
        <div className="flex flex-col w-full  text-center items-center  border-2 border-black  ">
          <h1 className="text-4xl font-medium text-simple flex">
            <span>Login In Your&nbsp;</span>
            <span className="font-heading">Account!</span>
          </h1>
          <p className="text-xl text-[#7B899D] font-simple my-10">
            Please log in with scan qr code or fill out the Form...
          </p>
          {/* form */}
          <form className="flex flex-col justify-center items-center w-full">
            <InputField type="text" placeholder="Email" styles={"w-[400px]"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
