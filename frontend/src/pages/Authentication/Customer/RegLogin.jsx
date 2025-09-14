import React, { useState } from "react";
import openEye from "../../../assets/eye-solid-full.svg";
import closeEye from "../../../assets/eye-slash-solid-full.svg";

export default function RegLoginPage() {
  const [regOrLogin, setRegOrLogin] = useState("User Login");
  const [displayPassword, setDisplayPassword] = useState(false);
  return (
    <div className="flex flex-row items-center justify-center align-center h-screen bg-[#FFF8F0]">
      <div className="flex flex-col items-center justify-center bg-[#D4A373] w-auto h-auto p-[0px] shadow-[0_10px_20px_rgb(0,0,0,1)] rounded-[10px] border-[1px] border-[#2D2D2D] gap-1">
        <div className="items-center justify-center flex align-center px-0 py-7">
          <h1 className="text-[#2D2D2D] font-bold text-[60px]">{regOrLogin}</h1>
        </div>

        <div className="items-center justify-center flex align-center gap-2">
          <div
            className="items-center justify-center flex align-center px-20 py-5 border-[2px] border-[#2D2D2D] w-[49%] rounded-md cursor-pointer shadow-[0_10px_20px_rgb(0,0,0,0.5)]"
            onClick={() => setRegOrLogin("User Login")}
          >
            <h1 className="text-[#2D2D2D] font-bold text-2xl">Login</h1>
          </div>
          <div
            className="items-center justify-center flex align-center px-20 py-5 border-[2px] border-[#2D2D2D] w-[49%] rounded-md cursor-pointer shadow-[0_10px_20px_rgb(0,0,0,0.5)]"
            onClick={() => setRegOrLogin("User Registration")}
          >
            <h1 className="text-[#2D2D2D] font-bold text-2xl">Registration</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center align-center">
          <form className="items-center justify-center align-center flex flex-col p-5  gap-2">
            <div
              className={`items-center justify-center align-center flex flex-col ${
                regOrLogin === "User Registration" ? "hidden" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Email"
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
                <input
                  type={displayPassword ? "text" : "password"}
                  placeholder="Password"
                  className="text-[#2D2D2D] w-[90%] h-13 p-5 focus:outline-none"
                />
                <img
                  src={displayPassword ? openEye : closeEye}
                  className="w-[10%] h-[5%] p-1"
                  onClick={() => setDisplayPassword(!displayPassword)}
                />
              </div>
              <br />
            </div>

            <div
              className={`items-center justify-center align-center flex flex-col ${
                regOrLogin === "User Login" ? "hidden" : ""
              }`}
            >
              <input
                type="text"
                placeholder="First Name"
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <input
                type="text"
                placeholder="Last Name"
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <input
                type="tel"
                placeholder="Contact No"
                pattern="{10}[0-9]"
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
                <input
                  type={displayPassword ? "text" : "password"}
                  placeholder="Password"
                  className="text-[#2D2D2D] w-[90%] h-13 p-5 focus:outline-none"
                />
                <img
                  src={displayPassword ? openEye : closeEye}
                  className="w-[10%] h-[5%] p-1"
                  onClick={() => setDisplayPassword(!displayPassword)}
                />
              </div>
              <br />
              <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
                <input
                  type={displayPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="text-[#2D2D2D] w-[90%] h-13 p-5 focus:outline-none"
                />
                <img
                  src={displayPassword ? openEye : closeEye}
                  className="w-[10%] h-[5%] p-1"
                  onClick={() => setDisplayPassword(!displayPassword)}
                />
              </div>
            </div>
            <button className="bg-[#2D2D2D] text-[#FFF8F0] p-[20px] font-medium text-xl rounded-[5px]">
              {regOrLogin}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
