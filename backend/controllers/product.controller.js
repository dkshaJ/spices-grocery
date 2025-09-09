import { Product } from "./../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ category: id });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, quantity, category, image, status } =
      req.body;
    if (
      !name ||
      !price ||
      !description ||
      !quantity ||
      !category ||
      !image ||
      !status
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const product = await Product.create({
      name,
      price,
      description,
      quantity,
      category,
      image,
      status,
    });
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const product = await Product.findByIdAndUpdate(id, updates, { new: true });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
