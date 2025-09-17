import React, { useEffect, useState } from "react";
import trash from "../../assets/trash-solid-full.svg";
import Header from "../General/Header";
import Footer from "../General/Footer";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout"); // redirect to checkout page
  };
  const fetchCartItems = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/cart/mycart`, {
        credentials: "include",
      });
      const data = await res.json();
      setCartItems(data.products || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const removeItem = async (productId) => {
    try {
      await fetch(`http://localhost:3000/api/cart/remove/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;
    try {
      await fetch(`http://localhost:3000/api/cart/update`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId, quantity }),
      });
      fetchCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading cart...</p>;

  return (
    <div className="flex flex-col items-center gap-10 text-[#FFF8F0]">
      <Header />
      <h1 className="text-4xl font-bold text-black">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl text-black">Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.product._id}
            className="flex gap-5 border-2 bg-[#C1440E] border-[#FFF8F0] p-5 rounded-2xl"
          >
            <div className="w-20 h-20 bg-white flex items-center justify-center text-black">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">{item.product.title}</h3>
              <p className="text-md">{item.product.description}</p>
              <p className="text-md font-medium">₹{item.product.price}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity + 1)
                  }
                  className="bg-white text-black px-2 rounded"
                >
                  +
                </button>
                <span className="text-xl font-bold">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity - 1)
                  }
                  className="bg-white text-black px-2 rounded"
                >
                  -
                </button>
                <button onClick={() => removeItem(item.product._id)}>
                  <img src={trash} alt="Remove" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      {/* Proceed to Checkout Button */}
      <button
        onClick={handleCheckout}
        className="bg-[#2D2D2D] text-[#FFF8F0] p-3 rounded-lg text-xl mt-5"
      >
        Proceed to Checkout
      </button>

      <Footer />
    </div>
  );
}
