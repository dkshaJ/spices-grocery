import { Router } from "express";
import {
  getProducts,
  getProductByCategory,
  getProductById,
} from "../controllers/product.controller.js";

export const productRouter = Router();

productRouter.get("/", getProducts);

productRouter.get("/category/:id", getProductByCategory);

productRouter.get("/:id", getProductById);
