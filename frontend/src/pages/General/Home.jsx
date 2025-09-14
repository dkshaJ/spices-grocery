import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Itemscard from "./Itemscard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center align-center w-full h-full">
      <Header />
      <Itemscard />
      <Footer />
    </div>
  );
}
