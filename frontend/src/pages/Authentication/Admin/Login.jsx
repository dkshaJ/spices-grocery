import React, { useState } from "react";
import openEye from "../../../assets/eye-solid-full.svg";
import closeEye from "../../../assets/eye-slash-solid-full.svg";

export default function Login() {
  const [displayPassword, setDisplayPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center align-center bg-[#C1440E] p-10 m-50">
        <h1 className="text-[#FFF8F0] font-bold text-4xl">Admin Login</h1>
        <form className="items-center justify-center align-center flex flex-col p-5  gap-2">
          <div className="items-center justify-center align-center flex flex-col">
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
        </form>
      </div>
    </div>
  );
}
