import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/square-instagram-brands-solid-full.svg";
import facebook from "../../assets/square-facebook-brands-solid-full.svg";
import twitter from "../../assets/square-x-twitter-brands-solid-full.svg";
import linkedin from "../../assets/square-linkedin-brands-solid-full.svg";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center align-center px-3 bg-[#C1440E] text-[#FFF8F0] text-md font-bold">
      <div className="w-auto flex flex-col items-center justify-between align-center px-120 gap-x-30">
        <div className="w-auto flex flex-row justify-center items-center p-10 gap-10">
          <div className="w-auto h-auto flex flex-col items-center justify-center align-center p-3 gap-4 text-lg">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/dashboard">Profile</Link>
          </div>
          <div className="h-50 border-2 border-[#FFF8F0]"></div>
          <div className="flex flex-col items-center justify-center align-center gap-2">
            <div className="flex flex-col items-center justify-center align-center">
              bskfvksdhi'lsjefljfgliajeglnalsv asgiajegl zsldvnaslnvlasjdv
              slvnosdjhoa wesvaNwvelnsdvl sdvlsndvlk sdvlknsldnvlsdnvln
              fkjznsknzsvlnsdlnvs sdvlks dvs dv sdvljsnsldnvls vsldvknsdlv
              sdvlnsaldv sadvjnsldv nsdl jvsdjlvnsdjnvslv sadvl.
            </div>
            <div className="flex flex-row items-center justify-center align-center gap-2">
              <img src={instagram} className="w-10 h-10" />
              <img src={facebook} className="w-10 h-10" />
              <img src={twitter} className="w-10 h-10" />
              <img src={linkedin} className="w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-3 bg-[#C1440E] text-[#FFF8F0] gap-2">
          <p>Developed by - Diksha Kamat</p>
          <p>@2025</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
