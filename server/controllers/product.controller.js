import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";
import cloudinary from "../config/cloudinary.js";

export const createProduct = async (req, res, next) => {
  try {
    if (req.user.role !== "retailer") {
      return next(errorHandler(403, "Access denied"));
    }
    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
          folder: "products",
        },
        (error, result) => {
          if (error) {
            console.log("cloudinary upload error:", error);
            return next(errorHandler(500, "Image upload failed"));
          }
        }
      );
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "image",
              folder: "products",
            },
            (error, result) => {
              if (error) {
                console.error("Cloudinary upload error:", error);
                reject(error);
              } else {
                resolve(result);
              }
            }
          )
          .end(req.file.buffer);
      });
      imageUrl = uploadResult.secure_url;
    }
    const product = new Product({
      ...req.body,
      image: imageUrl,
      createdBy: req.user.id,
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
