import { ProductCategory } from "../models/productCategories.model.js";

export const createProductCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const productCategory = await ProductCategory.create({ name });
    return res.status(201).json(productCategory);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategory.find();
    return res.status(200).json(productCategories);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProductCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const productCategory = await ProductCategory.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );
    return res.status(200).json(productCategory);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProductCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const productCategory = await ProductCategory.findByIdAndDelete(id);
    return res.status(200).json(productCategory);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
