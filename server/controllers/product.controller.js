import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";

export const createProduct = async (req, res, next) => {
  try {
    if (req.user.role !== "retailer") {
      return next(errorHandler(403, "Access denied"));
    }
    const product = new Product({
      ...req.body,
      createdBy: req.user._id,
    });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    next(error);
  }
};
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate("createdBy", "name email");
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
