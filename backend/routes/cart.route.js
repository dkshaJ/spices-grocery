import { Router } from "express";
import {
  getCartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
  checkout,
} from "../controllers/cart.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

export const cartRouter = Router();

// All cart operations require user login
cartRouter.get("/mycart/:userId", checkAuth, getCartItems);

cartRouter.post("/add/:userId", checkAuth, addToCart);

cartRouter.delete("/remove/:userId/:productId", checkAuth, removeFromCart);

cartRouter.patch("/update/:userId", checkAuth, updateQuantity);

cartRouter.post("/checkout/:userId", checkAuth, checkout);
