import React, { useEffect, useState } from "react";
import Header from "../General/Header";
import Footer from "../General/Footer";

const CART_URL = "http://localhost:3000/api/cart";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shippingAddress, setShippingAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  // Fetch cart items
  const fetchCartItems = async () => {
    try {
      const res = await fetch(`${CART_URL}/mycart`, { credentials: "include" });
      const data = await res.json();
      setCartItems(data?.products || []); // ✅ Correctly fetch products array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Handle place order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!shippingAddress) {
      alert("Please enter your shipping address");
      return;
    }

    try {
      const res = await fetch(`${CART_URL}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ shippingAddress, paymentMethod }),
      });

      const data = await res.json();
      setOrderPlaced(true);
      setOrderDetails(data);
      //setCartItems([]); // clear cart in frontend
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Try again!");
    }
  };

  if (loading) return <p className="text-black text-2xl">Loading cart...</p>;

  if (orderPlaced && orderDetails) {
    return (
      <div className="flex flex-col justify-center items-center gap-10">
        <Header />
        <h1 className="text-4xl font-bold text-black">Order Placed!</h1>
        <p className="text-2xl text-black p-4">
          Your order has been placed successfully.
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Header />
      <h1 className="text-4xl font-bold text-black">Checkout</h1>

      <div className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div
            key={item.product._id}
            className="flex flex-row gap-5 bg-[#C1440E] p-3 rounded-2xl text-[#FFF8F0] items-center"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <p className="font-bold text-lg">{item.product.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>Price: ₹{item.product.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-2xl font-semibold">Total: ₹ {totalPrice}</p>

      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={handlePlaceOrder}
      >
        <input
          type="text"
          placeholder="Enter shipping address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          className="p-2 border rounded w-80"
          required
        />

        <div className="flex flex-row gap-5 items-center">
          <label>
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            UPI
          </label>
        </div>

        <button
          type="submit"
          className="bg-[#2D2D2D] text-[#FFF8F0] p-2 text-lg rounded-[5px] w-fit"
        >
          Place Order
        </button>
      </form>

      <Footer />
    </div>
  );
}
