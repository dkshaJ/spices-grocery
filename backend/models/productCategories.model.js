import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ProductCategory = mongoose.model(
  "Product_Category",
  productCategorySchema
);
