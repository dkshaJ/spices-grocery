import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="w-full flex flex-row justify-between items-center p-3 bg-[#C1440E] text-[#FFF8F0] text-2xl font-bold">
      <div className="w-auto flex flex-row items-center justify-center align-center gap-3">
        <img src={logo} className="w-20 h-20 rounded-full" />
        <h1 className="text-4xl">Spice - Groceries</h1>
      </div>
      <div className="w-auto flex flex-row items-center justify-center align-center gap-10">
        <NavLink
          to="/"
          className="hover:text-[#FFF8F0] hover:bg-[#FFB703] hover:p-3 hover:rounded-full"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="hover:text-[#FFF8F0] hover:bg-[#FFB703] hover:p-3 hover:rounded-full"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-[#FFF8F0] hover:bg-[#FFB703] hover:p-3 hover:rounded-full"
        >
          Contact
        </NavLink>
        <NavLink
          to="/cart"
          className="hover:text-[#FFF8F0] hover:bg-[#FFB703] hover:p-3 hover:rounded-full"
        >
          Cart
        </NavLink>
        <NavLink
          to="/dashboard"
          className="hover:text-[#FFF8F0] hover:bg-[#FFB703] hover:p-3 hover:rounded-full"
        >
          Profile
        </NavLink>
      </div>
      <NavLink to="/reg-login">
        <div className="w-auto h-auto flex flex-row items-center justify-center align-center bg-[#FFB703] p-3 rounded-full cursor-pointer">
          Login / Signup
        </div>
      </NavLink>
    </div>
  );
}
