import React, { useState } from "react";
import Header from "../../General/Header";
import Footer from "../../General/Footer";
import openEye from "../../../assets/eye-solid-full.svg";
import closeEye from "../../../assets/eye-slash-solid-full.svg";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [section, setSection] = useState(1);
  const [displayPassword, setDisplayPassword] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center align-cneter gap-10">
      <Header />
      <div className="flex flex-col justify-center items-cneter align-center">
        <h1 className="text-4xl font-bold text-black">Dashboard</h1>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col justify-center items-center align-center p-10">
          <div className="flex flex-col justify-center items-center align-center bg-[#C1440E] w-30 h-30 rounded-full">
            This is for img.
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl text-[#2D2D2D] font-bold">Name: ABC</p>
            <p className="text-xl text-[#2D2D2D] font-bold">
              Address: H.No. 2, 'XYZ' colony, ABC Nagar, Delhi
            </p>
            <p className="text-xl text-[#2D2D2D] font-bold">
              Email: example@mail.com
            </p>
            <p className="text-xl text-[#2D2D2D] font-bold">
              Contact: +91 1234567890
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center align-center gap-5">
        <div
          className="flex flex-col justify-center items-center align-center p-5 w-60 rounded-xl bg-[#C1440E] cursor-pointer"
          onClick={() => setSection(1)}
        >
          <h3 className="text-2xl font-bold text-[#FFF8F0]">Track Orders</h3>
        </div>
        <div
          className="flex flex-col justify-center items-center align-center p-5 w-60 rounded-xl bg-[#C1440E] cursor-pointer"
          onClick={() => setSection(2)}
        >
          <h3 className="text-2xl font-bold text-[#FFF8F0]">
            Edit Information
          </h3>
        </div>
        <div
          className="flex flex-col justify-center items-center align-center p-5 w-60 rounded-xl bg-[#C1440E] cursor-pointer"
          onClick={() => setSection(3)}
        >
          <h3 className="text-2xl font-bold text-[#FFF8F0]">Order History</h3>
        </div>
        <Link to="/cart">
          <div
            className="flex flex-col justify-center items-center align-center p-5 w-60 rounded-xl bg-[#C1440E] cursor-pointer"
            onClick={() => setSection(4)}
          >
            <h3 className="text-2xl font-bold text-[#FFF8F0]">Cart</h3>
          </div>
        </Link>
      </div>
      <div className="flex flex-col p-10 shadow-xl/30">
        <div
          className={`flex flex-col gap-5 justify-center items-center align-center ${
            section === 1 ? "" : "hidden"
          }`}
        >
          <form className="flex flex-col gap-5 justify-center items-center align-center">
            <input
              type="text"
              placeholder="Enter your order ID"
              className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-lg"
            />
            <button className="bg-[#C1440E] text-[#FFF8F0] p-3 font-medium text-xl rounded-md">
              Search
            </button>
          </form>
        </div>
        <div
          className={`flex flex-col gap-5 justify-center items-center align-center ${
            section === 2 ? "" : "hidden"
          }`}
        >
          <form className="flex flex-col gap-5 justify-center items-center align-center">
            <input
              type="text"
              placeholder="First Name"
              className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-lg"
            />
            <input
              type="text"
              placeholder="Contact"
              className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-lg"
            />
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
            <button className="bg-[#C1440E] text-[#FFF8F0] p-3 font-medium text-xl rounded-md">
              Submit
            </button>
          </form>
        </div>
        <div
          className={`flex flex-col gap-5 justify-center items-center align-center ${
            section === 3 ? "" : "hidden"
          }`}
        >
          <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Order No. X</h3>
              <p className="text-md font-medium">No. of products Y</p>
              <p className="text-md font-medium">Total price: ABC Rs.</p>
              <p className="text-md font-medium">Date: XX/XX/XXXX</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Order No. X</h3>
              <p className="text-md font-medium">No. of products Y</p>
              <p className="text-md font-medium">Total price: ABC Rs.</p>
              <p className="text-md font-medium">Date: XX/XX/XXXX</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Order No. X</h3>
              <p className="text-md font-medium">No. of products Y</p>
              <p className="text-md font-medium">Total price: ABC Rs.</p>
              <p className="text-md font-medium">Date: XX/XX/XXXX</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Order No. X</h3>
              <p className="text-md font-medium">No. of products Y</p>
              <p className="text-md font-medium">Total price: ABC Rs.</p>
              <p className="text-md font-medium">Date: XX/XX/XXXX</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Order No. X</h3>
              <p className="text-md font-medium">No. of products Y</p>
              <p className="text-md font-medium">Total price: ABC Rs.</p>
              <p className="text-md font-medium">Date: XX/XX/XXXX</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
