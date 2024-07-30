import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginSvg from "../assets/LoginSvg.svg";
import SignUp from "../assets/SignUp.svg";
import InputField from "../Components/InputField";
import key from "../assets/key.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DoneIcon from "@mui/icons-material/Done";
import Button from "../Components/Button";
import MainLogo from "../assets/MainLogo.svg";
import iconss from "../assets/Icons.svg";
import icons2 from "../assets/Icons2.svg";
import icons3 from "../assets/Icons3.svg";
import icons4 from "../assets/Icons4.svg";
import Apple from "../assets/Apple.svg";
import Google from "../assets/Google.svg";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useNavigate } from "react-router-dom";
import { isBrowser, isMobile, browserName } from "react-device-detect";
import { registerUser } from "../Redux/slice/user/userAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const Icons = [iconss, icons2, icons3, icons4];
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = () => {
    let device = {};
    device.id = " ";
    device.name = browserName;
    device.build = " ";
    device.model = isMobile ? "Mobile" : isBrowser ? "Browser" : "Desktop";
    device.lastLoggedIn = new Date().toISOString();

    dispatch(
      registerUser({
        email: data.email,
        password: data.password,
        name: data.name,
        reference: null,
        device,
      })
    ).then((res) => {
      console.log(res);
      if (registerUser.fulfilled.match(res)) {
        navigate("/");
        toast.success("Registered Successfully");
      }
    });
  };
  return (
    <div className=" relative bg-gradient-to-r from-[#c4e9f974] to-white pt-8 overflow-hidden flex flex-col justify-between   ">
      <div>
        {/* make button named back */}
        <div
          className="flex justify-center items-center py-5 rounded-full bg-white w-[150px]  ml-10 cursor-pointer z-[10]  absolute "
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon /> Back
        </div>
        {/* button out */}
        {/* main div in */}
        <div className="flex justify-between ">
          <div className="hidden lg:block min-w-[30%] min-h-full max-h-screen">
            <img
              src={SignUp}
              alt=""
              className=" flex-1 absolute top-0 left-0 z-[0] "
            />
          </div>
          {/* All login Fields in */}
          <div className="flex flex-col w-full  text-center items-center   ">
            <h1 className="text-4xl font-medium text-primary flex">
              <span>Create New&nbsp;</span>
              <span className="font-heading">Account!</span>
            </h1>
            <p className="text-xl text-[#7B899D] font-simple mt-4 mb-10">
              Please Fill Out The Form To Register...
            </p>
            {/* form */}
            <form className="flex flex-col justify-center items-center w-full">
              <div className="w-[90%]  md:w-[50%]">
                <InputField
                  type="text"
                  text="Full Name"
                  placeholder="Full Name"
                  Icon={PersonOutlineIcon}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <InputField
                  type="text"
                  placeholder="Email"
                  Icon={EmailIcon}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <InputField
                  type="password"
                  text="Password"
                  Icon={key}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              {/* terms and conditions */}
              <div className="flex justify-between w-[90%]  md:w-[50%]">
                <div className="flex  items-center">
                  <div
                    className=" p-[2px] rounded-full h-10 w-10 border-2  z-50 "
                    style={{
                      backgroundColor: agreeTerms ? "#0A7AF9" : "white",
                      borderColor: agreeTerms ? "#0A7AF9" : "#A6A6BB",
                    }}
                    onClick={() => setAgreeTerms(!agreeTerms)}
                  >
                    {agreeTerms && (
                      <DoneIcon sx={{ color: "white", fontSize: 25 }} />
                    )}
                  </div>
                  <p className="ml-2 text-[#4A5A71] font-semibold">
                    I Agree To The Rules
                  </p>
                </div>
                {/* <p className="text-[#0A7AF9] font-bold  ">Forgot Password? </p> */}
              </div>
              {/* terms and conditions out */}

              <div className="w-[90%]  md:w-[50%]" onClick={handleRegister}>
                <Button text="Sign Up" />
              </div>

              <Link to="/Login">
                <div className="flex  items-center mt-5">
                  <p className="ml-2 text-[#A6A6BB] font-semibold">
                    Do You Have Account? &nbsp;
                  </p>
                  <p className="text-[#0A7AF9] font-bold  "> Login </p>
                </div>
              </Link>
              {/* Or with lines at left and right */}
              {/* <div className="flex justify-between items-center w-[90%]  md:w-[50%] mt-5">
                <div className="w-[40%] h-[1px] bg-[#A6A6BB]"></div>
                <p className="text-black text-xl font-semibold">Or</p>
                <div className="w-[40%] h-[1px] bg-[#A6A6BB]"></div>
              </div> */}
              {/* Or with lines at left and right */}
              {/* Two Rounded Buttons side by Side one with Apple text and logo and other with google text and logo mui icons */}
              {/* <div className="flex justify-between items-center w-[90%]  md:w-[50%] mt-5 mb-16">
                <div className="flex justify-center items-center w-[40%] py-7 bg-[#F2F2F2] rounded-full">
                  <img src={Apple} alt="" className="w-[30px] h-[30px]" />
                  <p className="text-black text-xl font-semibold ml-2">Apple</p>
                </div>
                <div className="flex justify-center items-center w-[40%] py-7  bg-[#F2F2F2] rounded-full">
                  <img src={Google} alt="" className="w-[30px] h-[30px]" />
                  <p className="text-black text-xl font-semibold ml-2">
                    Google
                  </p>
                </div>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      {/* main out */}
      {/* bottom  bar in */}
      <div className="hidden     ">
        {/* logo in */}
        <div className="flex  items-center">
          <img src={MainLogo} alt="" />
          <p className="font-heading text-primary text-2xl ml-4 whitespace-nowrap mr-3  ">
            Current <span className="font-normal">VPN</span>
          </p>
        </div>
        {/* logo out */}
        <div className="flex">
          {Icons.map((icon) => (
            <img src={icon} alt="" className=" mr-4" />
          ))}
        </div>
      </div>
      {/* bottom  bar out */}
    </div>
  );
}

export default Register;
