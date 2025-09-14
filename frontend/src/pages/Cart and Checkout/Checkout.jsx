import React from "react";
import Header from "../General/Header";
import Footer from "../General/Footer";

export default function Checkout() {
  return (
    <div className="flex flex-col justify-center items-center align-center gap-10">
      <Header />
      <h1 className="text-4xl font-bold text-black">Checkout</h1>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl">Totle products: 4</p>
        <p className="text-2xl">Price: 7364RS</p>
        <form className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-3">
            Choose your payment method:
            <div className="flex flex-row gap-1">
              <input type="radio" value="COD" name="payment" />
              <p>Cash on delivery</p>
            </div>
            <div className="flex flex-row gap-1">
              <input type="radio" value="UPI" name="payment" />
              <p>UPI</p>
            </div>
          </div>
          <button className="bg-[#2D2D2D] text-[#FFF8F0] p-2 text-lg rounded-[5px] w-fit">
            Place Order
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
