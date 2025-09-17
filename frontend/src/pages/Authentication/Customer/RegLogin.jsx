import React, { useState } from "react";
import openEye from "../../../assets/eye-solid-full.svg";
import closeEye from "../../../assets/eye-slash-solid-full.svg";
import { useNavigate } from "react-router-dom";

const AUTH_URL = "http://localhost:3000/api/auth";

export default function RegLoginPage() {
  const [regOrLogin, setRegOrLogin] = useState("User Login");
  const [displayPassword, setDisplayPassword] = useState(false);
  const navigate = useNavigate();

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Registration form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle login submit
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${AUTH_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem("userId", data.user._id);
        alert("Login successful!");
        navigate("/"); // Redirect to homepage or wherever
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error logging in");
    }
  };

  // Handle registration submit
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${AUTH_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          contactNo,
          password,
        }),
      });

      const data = await res.json();
      if (res.status === 201) {
        alert("Registration successful! Please login.");
        setRegOrLogin("User Login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

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
          <form
            onSubmit={
              regOrLogin === "User Login" ? handleLogin : handleRegister
            }
            className="items-center justify-center align-center flex flex-col p-5 gap-2"
          >
            {/* Login Form */}
            <div
              className={`flex flex-col items-center justify-center ${
                regOrLogin === "User Registration" ? "hidden" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
                <input
                  type={displayPassword ? "text" : "password"}
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
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

            {/* Registration Form */}
            <div
              className={`flex flex-col items-center justify-center ${
                regOrLogin === "User Login" ? "hidden" : ""
              }`}
            >
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <input
                type="tel"
                placeholder="Contact No"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                pattern="[0-9]{10}"
                className="text-[#2D2D2D] bg-[#FFF8F0] w-130 h-13 p-5 border-[2px] border-[#2D2D2D] rounded-[5px]"
              />
              <br />
              <div className="flex w-130 bg-[#FFF8F0] border-[2px] border-[#2D2D2D] rounded-[5px]">
                <input
                  type={displayPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-[#2D2D2D] w-[90%] h-13 p-5 focus:outline-none"
                />
                <img
                  src={displayPassword ? openEye : closeEye}
                  className="w-[10%] h-[5%] p-1"
                  onClick={() => setDisplayPassword(!displayPassword)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#2D2D2D] text-[#FFF8F0] p-[20px] font-medium text-xl rounded-[5px]"
            >
              {regOrLogin}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
