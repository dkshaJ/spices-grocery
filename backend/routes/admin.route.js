import { Router } from "express";
import { adminLogin, adminLogout } from "../controllers/admin.controller.js";
import { requireAdmin } from "../middlewares/admin.middleware.js";
import {
  getProducts,
  getProductByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import {
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
  getProductCategories,
} from "../controllers/productCategories.controller.js";
import {
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/order.controller.js";

export const adminRouter = Router();

adminRouter.post("/admin-login", adminLogin);

adminRouter.get("/admin-logout", adminLogout);

adminRouter.get("/products", getProducts);

adminRouter.get("/products/category/:id", getProductByCategory);

adminRouter.get("/products/:id", getProductById);

adminRouter.post("/create-product", createProduct);

adminRouter.patch("/update-product/:id", updateProduct);

adminRouter.delete("/delete-product/:id", deleteProduct);

adminRouter.post(
  "/create-product-category",
  requireAdmin,
  createProductCategory
);

adminRouter.patch(
  "/update-product-category/:id",
  requireAdmin,
  updateProductCategory
);

adminRouter.delete(
  "/delete-product-category/:id",
  requireAdmin,
  deleteProductCategory
);

adminRouter.get(
  "/get-all-product-categories",
  requireAdmin,
  getProductCategories
);

adminRouter.get("/orders", requireAdmin, getAllOrders);

adminRouter.patch("/updateOrders/:id", requireAdmin, updateOrderStatus);
