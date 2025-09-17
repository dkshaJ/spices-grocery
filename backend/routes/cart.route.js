import { Router } from "express";
import {
  getCartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
  checkout,
} from "../controllers/cart.controller.js";

export const cartRouter = Router();

cartRouter.get("/mycart", getCartItems);
cartRouter.post("/add", addToCart);
cartRouter.delete("/remove/:productId", removeFromCart);
cartRouter.patch("/update", updateQuantity);
cartRouter.post("/checkout", checkout);
