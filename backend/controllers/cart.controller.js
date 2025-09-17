import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { Order } from "../models/order.model.js";

// Get cart items
export const getCartItems = async (req, res) => {
  try {
    let cart = await Cart.findOne().populate("products.product");
    if (!cart) cart = new Cart({ products: [] });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne();
    if (!cart) cart = new Cart({ products: [] });

    const existingItem = cart.products.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(
      (item) => !item.product.equals(productId)
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update quantity
export const updateQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne();
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.products.find(
      (item) => item.product.toString() === productId
    );
    if (item) item.quantity = quantity;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Checkout
export const checkout = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.find().populate("products.product");
    if (!cart || cart.products.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    const orderProducts = cart.products.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const totalAmount = orderProducts.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = new Order({
      products: orderProducts,
      shippingAddress,
      paymentMethod,
      totalAmount,
    });

    await newOrder.save();

    // Clear cart
    cart.products = [];
    await cart.save();

    res.status(201).json({
      orderId: newOrder._id,
      products: orderProducts,
      shippingAddress: newOrder.shippingAddress,
      paymentMethod: newOrder.paymentMethod,
      totalAmount: newOrder.totalAmount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
