import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginSvg from "../assets/LoginSvg.svg";
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
import { Link, useNavigate } from "react-router-dom";
import { isBrowser, isMobile, browserName } from "react-device-detect";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/slice/user/userAction";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const Icons = [iconss, icons2, icons3, icons4];
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    let device = {};
    device.id = " ";
    device.name = browserName;
    device.build = " ";
    device.model = isMobile ? "Mobile" : isBrowser ? "Browser" : "Desktop";
    device.lastLoggedIn = new Date().toISOString();

    dispatch(
      userLogin({ email: data.email, password: data.password, device })
    ).then((res) => {
      console.log(res);
      if (userLogin.fulfilled.match(res)) {
        navigate("/");
      }
    });
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#c4e9f974] to-white pt-8 overflow-hidden flex flex-col justify-between">
      <div>
        {/* make button named back */}
        <div
          className="flex justify-center items-center py-5 rounded-full bg-white w-[150px]  ml-10 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon /> Back
        </div>
        {/* button out */}
        {/* main div in */}
        <div className="flex justify-between ">
          <div className="hidden lg:block">
            <img src={LoginSvg} alt="" className="  " />
          </div>
          {/* All login Fields in */}
          <div className="flex flex-col w-full  text-center items-center   ">
            <h1 className="text-4xl font-medium text-primary">
              <span>Login In Your&nbsp;</span>
              <span className="font-heading">Account!</span>
            </h1>
            <p className="text-xl text-[#7B899D] font-simple mt-4 mb-10">
              Please log in with scan qr code or fill out the Form...
            </p>
            {/* form */}
            <form className="flex flex-col justify-center items-center w-full">
              <div className="w-[90%]  md:w-[50%]">
                <InputField
                  type="text"
                  placeholder="Email"
                  Icon={PersonOutlineIcon}
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

              <div className="w-[90%]  md:w-[50%]">
                <Button text="Login" onClick={handleLogin} />
              </div>

              <div className="flex  items-center mt-5">
                <p className="ml-2 text-[#A6A6BB] font-semibold">
                  Do You Have Account? &nbsp;
                </p>
                <Link to="/Register">
                  <p className="text-[#0A7AF9] font-bold  "> Sign Up </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* main out */}
      {/* bottom  bar in */}
      <div className="hidden  md:flex h-16 w-full justify-between   ">
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

export default Login;
