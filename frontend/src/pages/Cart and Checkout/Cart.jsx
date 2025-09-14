import React from "react";
import trash from "../../assets/trash-solid-full.svg";
import Header from "../General/Header";
import Footer from "../General/Footer";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="flex flex-col justify-center items-center align-center gap-10 text-[#FFF8F0]">
      <Header />
      <h1 className="text-4xl font-bold text-black">Cart</h1>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center align-center gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl">
        <div className="flex flex-col items-center justify-center align-center w-20 h-20 bg-white text-black">
          This is img section
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">Title</h3>
          <p className="text-md font-medium">
            jhgfwjfgklsbvaiushviawf awvialbwdf dfihabwdf asdv asdaliusdbfas
            dfaihwbesfa sdf
          </p>
          <p className="text-md font-medium">price</p>
          <div className="flex flex-row gap-1">
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 text-1.5xl font-bold cursor-pointer">
              +
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5 cursor-pointer">
              <img src={trash} className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-center justify-center align-center text-black w-5 h-5  text-2xl font-bold cursor-pointer">
              -
            </div>
          </div>
        </div>
      </div>
      <Link to="/checkout">
        <div className="flex flex-row items-center justify-center bg-[#2D2D2D] p-3 rounded-lg cursor-pointer">
          Buy Now
        </div>
      </Link>
      <Footer />
    </div>
  );
}
