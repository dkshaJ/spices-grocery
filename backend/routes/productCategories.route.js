import { Router } from "express";
import { getProductCategories } from "../controllers/productCategories.controller.js";

export const productCategoryRouter = Router();

productCategoryRouter.get("/", getProductCategories);
