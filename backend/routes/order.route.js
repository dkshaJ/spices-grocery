import { Router } from "express";
import { getUserOrders } from "../controllers/order.controller.js";
import { checkAuth } from "../middlewares/auth.middleware.js";

export const orderRouter = Router();

// User routes
orderRouter.get("/my-orders/:userId", checkAuth, getUserOrders);
