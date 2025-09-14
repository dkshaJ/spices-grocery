import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import RegLoginPage from "./pages/Authentication/Customer/RegLogin";
import Home from "./pages/General/Home";
import Cart from "./pages/Cart and Checkout/Cart";
import Checkout from "./pages/Cart and Checkout/Checkout";
import Dashboard from "./pages/Authentication/Customer/Dashboard";
import About from "./pages/General/About";
import Contact from "./pages/General/Contact";
import Login from "./pages/Authentication/Admin/Login";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reg-login" element={<RegLoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
