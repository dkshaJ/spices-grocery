import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { Order } from "../models/order.model.js";

// Get cart items
export const getCartItems = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add item to cart
export const addToCart = async (req, res) => {
  try {
    const userId = req.params.userId; // ✅ taking from params
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

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
    const userId = req.params.userId;
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Use equals() for ObjectId comparison
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
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { user: userId, "products.product": productId }, // filter
      { $set: { "products.$.quantity": quantity } }, // update
      { new: true } // return updated doc
    );

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Checkout (Move cart to Order)
export const checkout = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { shippingAddress } = req.body;

    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    if (!cart || cart.products.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    const orderProducts = cart.products.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const newOrder = new Order({
      user: userId,
      products: orderProducts,
      shippingAddress,
    });

    await newOrder.save();
    cart.products = [];
    await cart.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
