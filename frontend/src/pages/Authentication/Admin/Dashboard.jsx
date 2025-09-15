import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/api/admin";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
  });
  const [newCategory, setNewCategory] = useState({ name: "" });

  // ========== ORDERS ==========
  const fetchOrders = async () => {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setOrders(data);
  };

  const updateOrderStatus = async (orderId, status) => {
    const res = await fetch(`${BASE_URL}/updateOrders/${orderId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    alert(data.message || "Order status updated");
    fetchOrders();
  };

  // ========== PRODUCTS ==========
  const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    setProducts(data);
  };

  const fetchProductsByCategory = async (categoryId) => {
    const res = await fetch(`${BASE_URL}/products/category/${categoryId}`);
    const data = await res.json();
    setProducts(data);
  };

  const fetchProductById = async (productId) => {
    const res = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await res.json();
    setSelectedProduct(data);
  };

  const createProduct = async () => {
    const res = await fetch(`${BASE_URL}/create-product`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    alert(data.message || "Product created");
    setNewProduct({ name: "", price: 0, category: "" });
    fetchProducts();
  };

  const updateProduct = async (productId, updatedData) => {
    const res = await fetch(`${BASE_URL}/update-product/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    alert(data.message || "Product updated");
    fetchProducts();
  };

  const deleteProduct = async (productId) => {
    const res = await fetch(`${BASE_URL}/delete-product/${productId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await res.json();
    alert(data.message || "Product deleted");
    fetchProducts();
  };

  // ========== CATEGORIES ==========
  const fetchCategories = async () => {
    const res = await fetch(`${BASE_URL}/get-all-product-categories`, {
      credentials: "include",
    });
    const data = await res.json();
    setCategories(data);
  };

  const createCategory = async () => {
    const res = await fetch(`${BASE_URL}/create-product-category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(newCategory),
    });
    const data = await res.json();
    alert(data.message || "Category created");
    setNewCategory({ name: "" });
    fetchCategories();
  };

  const updateCategory = async (categoryId, updatedData) => {
    const res = await fetch(
      `${BASE_URL}/update-product-category/${categoryId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedData),
      }
    );
    const data = await res.json();
    alert(data.message || "Category updated");
    fetchCategories();
  };

  // ========== LIFECYCLE ==========
  useEffect(() => {
    fetchOrders();
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="p-6 bg-[#FFF8F0] min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#333]">
        Admin Dashboard
      </h1>

      {/* ===== ORDERS ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#333]">Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#D4A373] shadow-md rounded-lg">
            <thead className="bg-[#CBA869] text-[#333]">
              <tr>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Products</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Shipping</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-[#E6D5B8]">
                  <td className="py-2 px-4">{order.user}</td>
                  <td className="py-2 px-4">
                    {order.products.map((p) => (
                      <div key={p.product}>
                        {p.product} x {p.quantity}
                      </div>
                    ))}
                  </td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">
                    {order.shippingAddress.street}, {order.shippingAddress.city}
                    , {order.shippingAddress.state} -{" "}
                    {order.shippingAddress.postalCode}
                  </td>
                  <td className="py-2 px-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(order._id, e.target.value)
                      }
                      className="border p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[#333]">Products</h2>
        <div className="flex items-center mb-4">
          <input
            placeholder="Filter by category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          <button
            onClick={() => fetchProductsByCategory(selectedCategory)}
            className="bg-[#D4A373] text-[#333] px-3 py-1 rounded-md hover:bg-[#CBA869]"
          >
            Filter
          </button>
          <button
            onClick={fetchProducts}
            className="bg-[#CBA869] text-[#333] px-3 py-1 rounded-md ml-2 hover:bg-[#D4A373]"
          >
            Reset
          </button>
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-[#D4A373] shadow-md rounded-lg">
            <thead className="bg-[#CBA869] text-[#333]">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="border-b hover:bg-[#E6D5B8]">
                  <td className="py-2 px-4">{p.name}</td>
                  <td className="py-2 px-4">{p.price}</td>
                  <td className="py-2 px-4">{p.category}</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <button
                      onClick={() => fetchProductById(p._id)}
                      className="bg-[#F0C05A] text-[#333] px-2 py-1 rounded-md hover:bg-[#E6B24C]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="bg-[#C94C4C] text-white px-2 py-1 rounded-md hover:bg-[#B44141]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-[#333]">
            Create / Update Product
          </h3>
          <div className="flex flex-wrap gap-2 items-center">
            <input
              placeholder="Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: Number(e.target.value) })
              }
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
            />
            <input
              placeholder="Category ID"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
            />
            <button
              onClick={createProduct}
              className="bg-[#6CA36C] text-white px-3 py-1 rounded-md hover:bg-[#5A8F5A]"
            >
              Create
            </button>
            {selectedProduct && (
              <button
                onClick={() => updateProduct(selectedProduct._id, newProduct)}
                className="bg-[#F0C05A] text-[#333] px-3 py-1 rounded-md hover:bg-[#E6B24C]"
              >
                Update
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#333]">Categories</h2>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-[#D4A373] shadow-md rounded-lg">
            <thead className="bg-[#CBA869] text-[#333]">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat._id} className="border-b hover:bg-[#E6D5B8]">
                  <td className="py-2 px-4">{cat.name}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() =>
                        updateCategory(cat._id, {
                          name: prompt("New Name", cat.name),
                        })
                      }
                      className="bg-[#F0C05A] text-[#333] px-2 py-1 rounded-md hover:bg-[#E6B24C]"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-2 items-center">
          <input
            placeholder="New Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ name: e.target.value })}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          <button
            onClick={createCategory}
            className="bg-[#6CA36C] text-white px-3 py-1 rounded-md hover:bg-[#5A8F5A]"
          >
            Create
          </button>
        </div>
      </section>
    </div>
  );
}
