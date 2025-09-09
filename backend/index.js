import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRouter } from "./routes/auth.route.js";
import { adminRouter } from "./routes/admin.route.js";
import { orderRouter } from "./routes/order.route.js";
import { productRouter } from "./routes/product.route.js";
import { productCategoryRouter } from "./routes/productCategories.route.js";
import { cartRouter } from "./routes/cart.route.js";

dotenv.config({ path: "./configs/.env" });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser()); // Cookie parser is used to parse cookies from the request

app.use("/api/auth", authRouter); // Routers MUST be used after the middlewares
app.use("/api/admin", adminRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
app.use("/api/product-categories", productCategoryRouter);
app.use("/api/cart", cartRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

app.listen(process.env.PORT, () => {
  connectDB()
    .then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`🚀 Server running on port ${process.env.PORT}`);
      });
    })
    .catch((err) => {
      console.error("❌ DB Connection Failed:", err);
    });
});
