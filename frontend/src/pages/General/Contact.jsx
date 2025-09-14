import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import instagram from "../../assets/square-instagram-brands-solid-full.svg";
import facebook from "../../assets/square-facebook-brands-solid-full.svg";
import twitter from "../../assets/square-x-twitter-brands-solid-full.svg";
import linkedin from "../../assets/square-linkedin-brands-solid-full.svg";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center align-center w-full h-full gap-5">
      <Header />
      <div className="flex flex-col items-center justify-center align-center gap-5 w-[95%] bg-[#C1440E] text-[#FFF8F0] p-10">
        <h1 className="text-5xl font-bold tracking-wider">Contact Us</h1>
        <p className="text-2xl font-bold tracking-wider">
          Phone: +91 1234567890
        </p>
        <p className="text-2xl font-bold tracking-wider">
          Email: spice.grocaries@mail.com
        </p>
        <p className="text-2xl font-bold tracking-wider">
          Address: 123 Main Street, City, Country
        </p>
        <div className="flex flex-row items-center justify-center align-center gap-5">
          <p className="text-2xl font-bold tracking-wider">Social Media:</p>
          <img src={instagram} className="w-10 h-10" />
          <img src={facebook} className="w-10 h-10" />
          <img src={twitter} className="w-10 h-10" />
          <img src={linkedin} className="w-10 h-10" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
