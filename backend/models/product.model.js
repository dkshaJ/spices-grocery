import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product_Category",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["In Stock", "Out of Stock"],
      default: "In Stock",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
