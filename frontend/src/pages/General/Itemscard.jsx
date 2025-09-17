import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/api/products";
const CART_URL = "http://localhost:3000/api/cart";

export default function Itemscard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await fetch(`${CART_URL}/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId, quantity: 1 }),
      });
      alert("Product added to cart!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col items-center bg-[#C1440E] text-[#FFF8F0] w-80 h-96 gap-3 p-5 rounded-2xl"
        >
          <div className="w-60 h-60 bg-white rounded-2xl flex items-center justify-center text-black">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <h2 className="font-bold text-2xl tracking-wider">{product.name}</h2>
          <p className="font-medium text-lg">{product.description}</p>
          <p className="font-semibold text-xl">₹ {product.price}</p>
          <button
            onClick={() => handleAddToCart(product._id)}
            className="bg-[#2D2D2D] p-2 rounded-lg mt-2"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
