import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000/api/admin";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
    description: "",
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

  const fetchProductsByCategory = async (categoryName) => {
    if (!categoryName) {
      fetchProducts(); // fallback -> fetch all products
      return;
    }

    // First fetch all categories to map name -> ID
    const categoriesRes = await fetch(
      `${BASE_URL}/get-all-product-categories`,
      {
        credentials: "include",
      }
    );
    const categories = await categoriesRes.json();

    // Find categoryId by matching typed name
    const matchedCategory = categories.find(
      (c) => c.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (!matchedCategory) {
      alert("Category not found!");
      return;
    }

    // Now fetch products by category ID directly from backend
    const res = await fetch(
      `${BASE_URL}/products/category/${matchedCategory._id}`
    );
    const data = await res.json();

    setProducts(data); // assuming setProducts updates state
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
    setNewProduct({
      name: "",
      price: "",
      quantity: "",
      category: "",
      image: "",
      description: "",
    });
    fetchProducts();
  };

  const updateProduct = async (productId) => {
    try {
      const updatedProduct = {
        name: newProduct.name,
        price: Number(newProduct.price),
        description: newProduct.description,
        quantity: Number(newProduct.quantity),
        category: newProduct.category,
        image: newProduct.image,
        status: newProduct.status,
      };

      console.log("📤 Sending update body:", updatedProduct);

      const res = await fetch(`${BASE_URL}/update-product/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(updatedProduct),
      });

      const data = await res.json();
      console.log("📥 Backend response:", data);

      if (res.ok) {
        alert("✅ Product updated successfully!");
        fetchProducts();
        setSelectedProduct(null);
        setNewProduct({
          name: "",
          price: "",
          quantity: "",
          category: "",
          image: "",
          description: "",
          status: "In Stock",
        });
      } else {
        alert("❌ Update failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("🔥 Error updating product:", error);
      alert("Server error while updating product " + error);
    }
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
    setSelectedCategory(null); // reset form after update
    setNewCategory({ name: "" }); // clear input
    fetchCategories();
  };

  const deleteCategory = async (categoryId) => {
    const res = await fetch(
      `${BASE_URL}/delete-product-category/${categoryId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await res.json();
    alert(data.message || "Category deleted");
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
                  <td className="py-2 px-4">
                    {order.user?.firstName} {order.user?.lastName}
                    <br />
                    <span className="text-sm text-gray-700">
                      {order.user?.email}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    {order.products.map((p, idx) => (
                      <div key={idx}>
                        {p.product?.name || p.product} x {p.quantity}
                      </div>
                    ))}
                  </td>
                  <td className="py-2 px-4">{order.status}</td>
                  <td className="py-2 px-4">
                    {order.shippingAddress?.street},{" "}
                    {order.shippingAddress?.city},{" "}
                    {order.shippingAddress?.state} -{" "}
                    {order.shippingAddress?.postalCode}
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
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Category</th>
                <th className="py-2 px-4 text-left">Image</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b hover:bg-[#E6D5B8]">
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">₹{product.price}</td>
                  <td className="py-2 px-4">{product.quantity}</td>
                  <td className="py-2 px-4">
                    {typeof product.category === "object"
                      ? product.category?.name
                      : product.category || "No Category"}
                  </td>
                  <td className="py-2 px-4">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-12 w-12 object-cover rounded-md"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="py-2 px-4">{product.status || "N/A"}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setNewProduct({
                          name: product.name || "",
                          price: product.price || "",
                          quantity: product.quantity || "",
                          category:
                            typeof product.category === "object"
                              ? product.category._id
                              : product.category || "",
                          image: product.image || "",
                          description: product.description || "",
                          status: product.status || "In Stock",
                        });
                      }}
                      className="bg-[#F0C05A] text-[#333] px-2 py-1 rounded-md hover:bg-[#E6B24C]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Create / Update Product Form */}
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
              className="border p-2 rounded-md"
            />
            <input
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: Number(e.target.value) })
              }
              className="border p-2 rounded-md"
            />
            <input
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  quantity: Number(e.target.value),
                })
              }
              className="border p-2 rounded-md"
            />
            <input
              placeholder="Category ID"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              className="border p-2 rounded-md"
            />
            <input
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className="border p-2 rounded-md"
            />
            <input
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="border p-2 rounded-md"
            />
            <select
              value={newProduct.status}
              onChange={(e) =>
                setNewProduct({ ...newProduct, status: e.target.value })
              }
              className="border p-2 rounded-md"
            >
              <option value="In Stock" selected>
                In Stock
              </option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
            <button
              onClick={createProduct}
              className="bg-[#6CA36C] text-white px-3 py-1 rounded-md"
            >
              Create
            </button>
            {selectedProduct && (
              <button
                onClick={() => updateProduct(selectedProduct._id)}
                className="bg-[#F0C05A] text-[#333] px-3 py-1 rounded-md"
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
          <table className="table-auto border-collapse border border-gray-400 w-full text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">
                  Category ID
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  Category Name
                </th>
                <th className="border border-gray-400 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td className="border border-gray-400 px-4 py-2">
                    {category._id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {category.name}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => {
                        setSelectedCategory(category); // load category into state
                        setNewCategory({ name: category.name }); // prefill input
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => deleteCategory(category._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-2 items-center">
          <input
            placeholder="Category Name"
            value={newCategory.name}
            onChange={(e) => setNewCategory({ name: e.target.value })}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          />
          {!selectedCategory ? (
            <button
              onClick={createCategory}
              className="bg-[#6CA36C] text-white px-3 py-1 rounded-md hover:bg-[#5A8F5A]"
            >
              Create
            </button>
          ) : (
            <button
              onClick={() =>
                updateCategory(selectedCategory._id, { name: newCategory.name })
              }
              className="bg-[#F0C05A] text-[#333] px-3 py-1 rounded-md hover:bg-[#E6B24C]"
            >
              Save Update
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
